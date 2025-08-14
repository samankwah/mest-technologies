#!/usr/bin/env node

/**
 * Simple Status Checker for Mest Technologies Project
 * Usage: node scripts/check_status.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROGRESS_FILE = path.join(__dirname, '..', 'progress_tracker.json');

function loadProgress() {
    try {
        const data = fs.readFileSync(PROGRESS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading progress tracker:', error.message);
        process.exit(1);
    }
}

function showStatus() {
    const progress = loadProgress();
    
    console.log('📊 Mest Technologies Project Status Report\n');
    console.log(`Project: ${progress.project.name}`);
    console.log(`Version: ${progress.project.version}`);
    console.log(`Overall Progress: ${progress.project.overallProgress}%`);
    console.log(`Current Phase: ${progress.project.currentPhase}`);
    console.log(`Status: ${progress.project.status}`);
    console.log(`Last Updated: ${progress.project.lastUpdated}\n`);
    
    console.log('📋 Phase Progress:');
    Object.keys(progress.phases).forEach(phaseId => {
        const phase = progress.phases[phaseId];
        const statusIcon = phase.status === 'completed' ? '✅' : 
                          phase.status === 'in_progress' ? '🟡' : '⭕';
        console.log(`  ${statusIcon} ${phase.name}: ${phase.progress}% (${phase.status})`);
        
        // Show task details for current phase
        if (phase.status === 'in_progress' || phase.status === 'completed') {
            Object.keys(phase.tasks || {}).forEach(taskId => {
                const task = phase.tasks[taskId];
                const taskIcon = task.status === 'completed' ? '✅' : 
                               task.status === 'in_progress' ? '🟡' : '⭕';
                console.log(`    ${taskIcon} ${taskId}: ${task.progress}%`);
            });
        }
    });
    
    console.log('\n🔧 Component Status:');
    Object.keys(progress.components).forEach(compId => {
        const comp = progress.components[compId];
        const statusIcon = comp.status === 'completed' ? '✅' : 
                          comp.status === 'in_progress' ? '🟡' : '⭕';
        const displayName = compId.replace(/([A-Z])/g, ' $1').toLowerCase();
        console.log(`  ${statusIcon} ${displayName}: ${comp.progress}% (${comp.status})`);
    });
    
    // Show technical debt summary
    const highPriorityDebt = progress.technicalDebt.highPriority || [];
    if (highPriorityDebt.length > 0) {
        console.log('\n⚠️  High Priority Technical Debt:');
        highPriorityDebt.forEach(debt => {
            console.log(`  • ${debt.item} (${debt.estimatedEffort})`);
        });
    }
    
    // Show recent changes
    const recentChanges = progress.changeLog.slice(0, 3);
    if (recentChanges.length > 0) {
        console.log('\n📝 Recent Changes:');
        recentChanges.forEach(change => {
            console.log(`  • v${change.version} (${change.date}): ${change.description}`);
        });
    }
    
    console.log('\n📈 Quick Stats:');
    console.log(`  • Total Phases: ${Object.keys(progress.phases).length}`);
    console.log(`  • Completed Phases: ${Object.values(progress.phases).filter(p => p.status === 'completed').length}`);
    console.log(`  • Active Components: ${Object.values(progress.components).filter(c => c.status === 'in_progress').length}`);
    console.log(`  • Technical Debt Items: ${(progress.technicalDebt.highPriority || []).length + (progress.technicalDebt.mediumPriority || []).length}`);
    console.log(`  • Team Members Assigned: ${Object.values(progress.team).filter(member => member.assigned).length}\n`);
}

// Run the status check
showStatus();