import React from "react"

import CalcMethod from '../Calc/lib'

const FixedValue = {
    '1116': 1.90,
    '1611': 2.90,
    '1117': 1.70,
    '1711': 2.70,
    '1118': 0.90,
    '1811': 1.90
}

describe("Calculate Method", () => {
    it("Return false if not included on price table", () => {
        const params = { origin: 16, dest: 16, time: 0, plan: 30 }
        expect(CalcMethod(FixedValue, params)).toBeFalsy()
    })

    it("Return true if included on price table", () => {
        const params = { origin: 11, dest: 16, time: 0, plan: 30 }
        expect(CalcMethod(FixedValue, params)).toBeTruthy()
    })

    it("Contain values ", () => {
        const params = { origin: 11, dest: 17, time: 80, plan: 60 }
        const [_, result] = CalcMethod(FixedValue, params)
        expect(result.priceWith).toMatch('37.40')
        expect(result.priceWithout).toMatch('136.00')
    })
})