import { Text } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform, animate, useAnimationControls, useAnimate, useInView } from 'framer-motion';
import { ElementRef, FC, RefObject, useEffect, useRef } from 'react';

type Props = {
    from: number
    to: number
    duration: number
    fontSize?: string
    fontWeight?: string
}

const Counter: FC<Props> = ({ from, to, duration, fontSize, fontWeight }) => {
    const counter = useRef<HTMLParagraphElement>(null)
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest: number) => Math.round(latest));
    const isInView = useInView(counter, { once: true })

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, { duration: duration });
            return controls.stop;
        }
    }, [isInView]);

    return (
        <Text
            color="inherit"
            fontSize={fontSize ?? '1rem'}
            ref={counter}
            fontWeight={fontWeight ?? 'normal'}
        >
            <motion.p>
                {rounded}
            </motion.p>
        </Text>
    )
};

export default Counter
