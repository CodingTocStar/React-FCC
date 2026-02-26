import { useEffect, useRef, useState } from "react";

const OTPGenerator = () => {
    /*USE STATE*/
    const [time, setTime] = useState(5)
    const [isActive, setIsActive] = useState(false)

    /*USEREF */
    const intervalRef = useRef(null)
    /*FIN USEREF */


    /*  FUNCION SUBMIT */
    const handleSubmit = () => {

        if (isActive) return

        setTime(5)
        setIsActive(true)

        intervalRef.current = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000)
    }



    /*USE EFFECT*/
    useEffect(() => {

    }, [contador])
    /*FIN USE EFFECT*/




    return (
        <div>
            <h1>OTP Generador</h1>
            <p>CLickea en el boton para generar tu clave unica</p>
            <button
                onClick={handleSubmit}
                disabled={intervalRef.current != null}>
                {intervalRef.current ? `Reintentar en ${time}s` : "Generar OTP"}
            </button>
        </div>
    );

}

export default OTPGenerator;