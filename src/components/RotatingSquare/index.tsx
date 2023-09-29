import { motion } from "framer-motion"
import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
    padding?: string
    appearOnHover?: boolean
}

const RotatingSquare: FC<Props> = ({ children, padding, appearOnHover }) => {
    const initialHidden = {
        backgroundColor: "#c49b63",
        borderColor: "#c49b63",
        transform: "rotate(0deg)",
        opacity: 0
    }
    const initialNormal = {
        backgroundColor: "transparent",
        transform: "rotate(0deg)",
    }
    return (
        <motion.div
            initial={appearOnHover ? initialHidden : initialNormal}
            whileHover={{
                backgroundColor: "#c49b63",
                color: "black",
                transform: "rotate(135deg)",
                opacity: 1
            }}
            transition={{
                duration: 0.4,
                backgroundColor: 2
            }}
            style={{
                border: "1px solid #c49b63",
                width: "fit-content",
                marginBottom: "1rem",
                position: "relative",
            }}
        >
            <motion.div
                initial={{
                    color: "#c49b63",
                    transform: "rotate(0deg)",
                }}
                animate={{
                    opacity: 1,
                }}
                whileHover={{
                    color: "black",
                    transform: "rotate(-135deg)"
                }}
                transition={{
                    duration: 0.4,
                }}
                style={{
                    padding: padding ?? "1.5rem",
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

export default RotatingSquare
