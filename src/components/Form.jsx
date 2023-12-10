import ContactForm from './ContactForm.jsx';

function Form() {
    return (
        <div className='form' id="Form">
            <div className="form-container container md:flex-col md:gap-20 lg:gap-5">
                <div className='form-desc  xl:w-full'>
                    <div className='about-btn w-64 h-24'> Pricing Table</div>
                    <h2 className='text-7xl lg:text-5xl'>We Are Best In Our
                        Classe</h2>
                    <p className='lg:text-xs'>Suspendisse blandit ornare eros vel vehicula. Vestibulum ante ipsum primis in faucibusorci luctus et ultrices posuere cubilia curae; Sed ullamcorper ex eu lectus viverra efficitur</p>
                    <div className="w-7-10">
                        <h3 className='white'>Client Satisfaction <p>90%</p> </h3>
                        <div className="line w-10-10 bg-white h-2 rounded-2xl">
                            <div className="w-9-10 bg-orange h-2 rounded-2xl">
                            </div>
                        </div>
                    </div>
                    <div className="w-7-10">
                        <h3 className='white'>Support Customer <p>60%</p></h3>
                        <div className="line w-10-10 bg-white h-2 rounded-2xl">
                            <div className="w-6-10 bg-orange h-2 rounded-2xl">
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm></ContactForm>
            </div >
        </div >
    );
}

export default Form;
