#!/usr/bin/env node

/**
 * Progress Tracker Update Script
 * 
 * This script helps update the project progress tracker automatically.
 * Usage: node scripts/update_progress.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File paths
const PROGRESS_FILE = path.join(__dirname, '..', 'progress_tracker.json');
const CHANGELOG_FILE = path.join(__dirname, '..', 'CHANGELOG.md');
const PROJECT_PLAN_FILE = path.join(__dirname, '..', 'PROJECT_PLAN.md');

/**
 * Load current progress data
 */
function loadProgress() {
    try {
        const data = fs.readFileSync(PROGRESS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading progress tracker:', error.message);
        process.exit(1);
    }
}

/**
 * Save progress data
 */
function saveProgress(data) {
    try {
        fs.writeFileSync(PROGRESS_FILE, JSON.stringify(data, null, 2));
        console.log('✅ Progress tracker updated successfully');
    } catch (error) {
        console.error('Error saving progress tracker:', error.message);
        process.exit(1);
    }
}

/**
 * Update project metadata
 */
function updateProjectMeta(progress, updates) {
    if (updates.version) progress.project.version = updates.version;
    if (updates.status) progress.project.status = updates.status;
    if (updates.currentPhase) progress.project.currentPhase = updates.currentPhase;
    if (updates.overallProgress !== undefined) progress.project.overallProgress = updates.overallProgress;
    
    progress.project.lastUpdated = new Date().toISOString().split('T')[0];
    
    return progress;
}

/**
 * Update phase progress
 */
function updatePhase(progress, phaseId, phaseUpdates) {
    if (!progress.phases[phaseId]) {
        console.error(`Phase ${phaseId} not found`);
        return progress;
    }
    
    const phase = progress.phases[phaseId];
    
    if (phaseUpdates.status) phase.status = phaseUpdates.status;
    if (phaseUpdates.progress !== undefined) phase.progress = phaseUpdates.progress;
    if (phaseUpdates.completedDate && phaseUpdates.status === 'completed') {
        phase.completedDate = phaseUpdates.completedDate;
    }
    
    // Update tasks
    if (phaseUpdates.tasks) {
        Object.keys(phaseUpdates.tasks).forEach(taskId => {
            if (phase.tasks[taskId]) {
                Object.assign(phase.tasks[taskId], phaseUpdates.tasks[taskId]);
            }
        });
    }
    
    return progress;
}

/**
 * Update component status
 */
function updateComponent(progress, componentId, componentUpdates) {
    if (!progress.components[componentId]) {
        console.error(`Component ${componentId} not found`);
        return progress;
    }
    
    Object.assign(progress.components[componentId], componentUpdates);
    progress.components[componentId].lastUpdated = new Date().toISOString().split('T')[0];
    
    return progress;
}

/**
 * Add changelog entry
 */
function addChangelogEntry(entry) {
    const today = new Date().toISOString().split('T')[0];
    const newEntry = {
        version: entry.version,
        date: today,
        type: entry.type || 'Update',
        description: entry.description,
        changes: entry.changes || [],
        filesModified: entry.filesModified || []
    };
    
    const progress = loadProgress();
    progress.changeLog.unshift(newEntry);
    saveProgress(progress);
    
    console.log(`✅ Added changelog entry for version ${newEntry.version}`);
}

/**
 * Calculate overall progress based on phases
 */
function calculateOverallProgress(progress) {
    const phases = Object.values(progress.phases);
    const totalPhases = phases.length;
    const weightedProgress = phases.reduce((sum, phase) => sum + phase.progress, 0);
    
    return Math.round(weightedProgress / totalPhases);
}

/**
 * Interactive CLI for updates
 */
async function runInteractive() {
    const readline = await import('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    console.log('🚀 Mest Technologies Progress Tracker Update Tool\n');
    
    rl.question('What would you like to update?\n1. Project meta\n2. Phase progress\n3. Component status\n4. Add changelog entry\n5. Calculate progress\nChoice (1-5): ', (choice) => {
        const progress = loadProgress();
        
        switch (choice) {
            case '1':
                updateProjectMetaInteractive(rl, progress);
                break;
            case '2':
                updatePhaseInteractive(rl, progress);
                break;
            case '3':
                updateComponentInteractive(rl, progress);
                break;
            case '4':
                addChangelogInteractive(rl);
                break;
            case '5':
                const newProgress = calculateOverallProgress(progress);
                progress.project.overallProgress = newProgress;
                saveProgress(progress);
                console.log(`✅ Overall progress calculated: ${newProgress}%`);
                rl.close();
                break;
            default:
                console.log('Invalid choice');
                rl.close();
        }
    });
}

/**
 * Quick update shortcuts
 */
function runQuickUpdate(args) {
    const progress = loadProgress();
    
    switch (args[0]) {
        case 'complete-task':
            // Usage: node update_progress.js complete-task phase1 taskName
            if (args.length >= 3) {
                const [, phaseId, taskId] = args;
                updatePhase(progress, phaseId, {
                    tasks: {
                        [taskId]: { status: 'completed', progress: 100 }
                    }
                });
                saveProgress(progress);
                console.log(`✅ Task ${taskId} in ${phaseId} marked as completed`);
            }
            break;
            
        case 'start-phase':
            // Usage: node update_progress.js start-phase phase2
            if (args.length >= 2) {
                const phaseId = args[1];
                updatePhase(progress, phaseId, {
                    status: 'in_progress',
                    startDate: new Date().toISOString().split('T')[0]
                });
                saveProgress(progress);
                console.log(`✅ Phase ${phaseId} started`);
            }
            break;
            
        case 'complete-phase':
            // Usage: node update_progress.js complete-phase phase1
            if (args.length >= 2) {
                const phaseId = args[1];
                updatePhase(progress, phaseId, {
                    status: 'completed',
                    progress: 100,
                    completedDate: new Date().toISOString().split('T')[0]
                });
                saveProgress(progress);
                console.log(`✅ Phase ${phaseId} completed`);
            }
            break;
            
        case 'update-version':
            // Usage: node update_progress.js update-version 2.1.0
            if (args.length >= 2) {
                progress.project.version = args[1];
                progress.project.lastUpdated = new Date().toISOString().split('T')[0];
                saveProgress(progress);
                console.log(`✅ Version updated to ${args[1]}`);
            }
            break;
            
        default:
            console.log('Unknown command. Available commands:');
            console.log('- complete-task <phaseId> <taskId>');
            console.log('- start-phase <phaseId>');
            console.log('- complete-phase <phaseId>');
            console.log('- update-version <version>');
            console.log('\nOr run without arguments for interactive mode.');
    }
}

/**
 * Display current status
 */
function showStatus() {
    const progress = loadProgress();
    
    console.log('📊 Current Project Status\n');
    console.log(`Project: ${progress.project.name}`);
    console.log(`Version: ${progress.project.version}`);
    console.log(`Overall Progress: ${progress.project.overallProgress}%`);
    console.log(`Current Phase: ${progress.project.currentPhase}`);
    console.log(`Last Updated: ${progress.project.lastUpdated}\n`);
    
    console.log('Phases:');
    Object.keys(progress.phases).forEach(phaseId => {
        const phase = progress.phases[phaseId];
        const statusIcon = phase.status === 'completed' ? '✅' : 
                          phase.status === 'in_progress' ? '🟡' : '⭕';
        console.log(`  ${statusIcon} ${phase.name}: ${phase.progress}% (${phase.status})`);
    });
    
    console.log('\nComponents:');
    Object.keys(progress.components).forEach(compId => {
        const comp = progress.components[compId];
        const statusIcon = comp.status === 'completed' ? '✅' : 
                          comp.status === 'in_progress' ? '🟡' : '⭕';
        console.log(`  ${statusIcon} ${compId}: ${comp.progress}% (${comp.status})`);
    });
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        runInteractive();
    } else if (args[0] === 'status') {
        showStatus();
    } else {
        runQuickUpdate(args);
    }
}

export {
    loadProgress,
    saveProgress,
    updateProjectMeta,
    updatePhase,
    updateComponent,
    addChangelogEntry,
    calculateOverallProgress
};