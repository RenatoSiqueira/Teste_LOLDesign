const CostCalc = (data, params) => {
    const { origin, dest, time, plan } = params
    const index = origin + dest.toString()
    const price = data[index]

    if (!price) {
        return false
    }

    const priceWithout = (price * time).toFixed(2)
    let priceWith = 0
    let savings = priceWithout

    if (time > plan) {
        const surplus = time - plan
        const extraCost = price + (price * 10 / 100)
        priceWith = (surplus * extraCost).toFixed(2)
        savings = (priceWithout - priceWith).toFixed(2)
    }

    const result = { ...params, priceWith, priceWithout, savings }
    return [true, result]
}

export default CostCalc