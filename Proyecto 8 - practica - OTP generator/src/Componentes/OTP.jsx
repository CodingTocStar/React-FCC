import { useEffect, useRef, useState } from "react";

const OTPGenerator = () => {
    /*USE STATE*/
    const [time, setTime] = useState(5)
    const [contador, setContador] = useState()

    /*USEREF */
    const intervalRef = useRef(null)
    /*FIN USEREF */


    /*  FUNCION SUBMIT */

    const handleSubmit = () => {

        if (intervalRef.current != null) return

        setTime(5)

        intervalRef.current = setInterval(
            () => {
                setTime(prevTime => {
                    if (prevTime === 1) {
                        clearInterval(intervalRef.current)
                        intervalRef.current = null
                        return 0
                    }
                    return prevTime - 1
                })
            },
            1000)
    }


}

/*USE EFFECT*/
useEffect(() => {

}, [contador])
/*FIN USE EFFECT*/




return (
    <div>
        <h1>OTP Generador</h1>
        <p>CLickea en el boton para generar tu clave unica</p>
        <button>Generar OTP</button>
    </div>
)

};


export default OTPGenerator;