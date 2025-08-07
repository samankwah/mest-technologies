export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
  }).format(number)
  return newNumber
}

export const getUniqueValues = (data, type) => {
  let dataMap = data.map((item) => item[type])
  if (type === "colors") {
    dataMap = dataMap.flat()
  }
  return ["all", ...new Set(dataMap)]
}