import { useAppContext } from "context";
import { useState, useEffect } from "react"

export function getCart(): CartItem[] {
    // getting stored value
    const saved: string | null = localStorage.getItem("cart")
    if (saved) {
        const initial: CartItem[] = JSON.parse(saved)
        return initial
    }
    return []
}

export function storeCartLocally(cart: CartItem[]) {
    localStorage.setItem("cart", JSON.stringify(cart))
}
