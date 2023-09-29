import { motion } from "framer-motion"
import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
    duration?: number
    y?: number
}

const SlideInMotion: FC<Props> = ({ children, duration, y }) => {
    return (
        <motion.div
            initial={{ y: y ?? 300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: duration ?? "0.7"
            }}
        >
            {children}
        </motion.div>

    )
}

export default SlideInMotion
