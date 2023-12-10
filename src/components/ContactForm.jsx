import Arrow from "../images/arrow.svg";
import { useForm } from 'react-hook-form';

function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className="app-form xl:w-8/12 md:w-full" id="form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-4xl">Get Appointment
                <img src={Arrow} style={{ width: 90, display: "flex", flexDirection: "column" }} alt="arrow" />
            </h2>
            <input type="text" placeholder="Full Name" {...register("FullName", { required: true, maxLength: 30 })} />
            {
                errors.FullName &&
                <p className="text-red">Enter a valid full name</p>
            }
            < input
                placeholder='Email'
                {...register("email", {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })
                }
            />
            {
                errors.email &&
                <p className="text-red">Enter a valid email address</p>
            }
            < input type="tel" placeholder="Phone" {...register("Phone", { required: true, maxLength: 13 })} />
            {
                errors.Phone &&
                <p className="text-red">Enter a valid tel number</p>
            }
            < input type="text" placeholder="Message"  {...register("Message", { required: true, maxLength: 300 })} />
            {
                errors.Message &&
                <p className="text-red">Enter a valid message</p>
            }
            < input style={{ background: "#F66000", color: "white" }} type="submit" />
        </form>
    );
}

export default ContactForm;
