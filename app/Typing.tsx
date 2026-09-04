"use client"

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypingConfig {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  backDelay?: number;
}

export default function TypeEffect({
  strings = [],
  typeSpeed = 50,
  backSpeed = 50,
  loop = true,
  backDelay = 1000,
}: TypingConfig){
        const el = useRef(null)
        useEffect(() => {
            const typed = new Typed(el.current,{
                strings, typeSpeed, backSpeed, loop, backDelay
            })
            return () => typed.destroy()
        }, [strings, typeSpeed, backSpeed, loop, backDelay]);

        return <span ref={el}></span>
    }