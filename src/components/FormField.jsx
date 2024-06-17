import React, { useContext } from 'react'
import ActionButton from './ActionButton'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { numberOptions, jobTypes, jobDays } from '../docs/data';
import JobContext from '../context/JobContext';


const FormField = () => {
    const animatedComponents = makeAnimated();
    const {
        formState,
        setFormState,
        handleSaveJob
    } = useContext(JobContext);


    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSelectChange = (name, value) => {
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        handleSaveJob(formState)
    }

    return (
        <>
            <div className='p-6 border bg-white w-full'>
                <div className='flex justify-end mb-6'><ActionButton /></div>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-3'>
                        <div className='pt-[6px]'>
                            <input
                                name='showTitle'
                                type="checkbox"
                                checked={formState.showTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <input className="border p-1 w-full outline-none" name='title' value={formState.title} onChange={handleChange} placeholder='Job Post Title' />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            <input
                                name='showIntroduction'
                                type="checkbox"
                                checked={formState.showIntroduction}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-sm font-bold mb-2">Introduction</label>
                            <textarea className="border p-1 w-full resize-none h-14 outline-none" name='introduction' value={formState.introduction} onChange={handleChange} />
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div>
                            <input
                                name='showRoles'
                                type="checkbox"
                                checked={formState.showRoles}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-sm font-bold mb-2">Roles & Responsibilities</label>
                            <textarea className="border p-1 w-full resize-none h-[4.3rem] outline-none" name='roles' value={formState.roles} onChange={handleChange} placeholder='Your job role will include...' />
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='pt-1'>
                            <input
                                name='showExperience'
                                type="checkbox"
                                checked={formState.showExperience}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-full flex justify-between lg:items-center items-start lg:flex-row flex-col">
                            <label className="text-sm font-bold mb-2 inline-block">Experience Range (yrs)</label>
                            <div className='flex gap-4 lg:justify-start justify-between lg:w-auto w-full'>
                                <Select
                                    className="basic-single w-32"
                                    classNamePrefix="select"
                                    placeholder="Min"
                                    name='experienceMin'
                                    options={numberOptions}
                                    onChange={(value) => handleSelectChange('experienceMin', value)}
                                />
                                <Select
                                    className="basic-single w-32"
                                    placeholder="Max"
                                    name='experienceMax'
                                    options={numberOptions}
                                    onChange={(value) => handleSelectChange('experienceMax', value)}
                                />
                            </div>

                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='pt-[6px]'>
                            <input
                                name='showQualification'
                                type="checkbox"
                                checked={formState.showQualification}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <input className="border p-1 w-full outline-none" name='qualification' value={formState.qualification} onChange={handleChange} placeholder='Qualification' />
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='pt-[6px]'>
                            <input
                                name='showSalary'
                                type="checkbox"
                                checked={formState.showSalary}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <input className="border p-1 w-full outline-none" name='salaryRange' value={formState.salaryRange} onChange={handleChange} placeholder='Salary Range' />
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div>
                            <input
                                name='showDescription'
                                type="checkbox"
                                checked={formState.showDescription}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <textarea className="border p-1 w-full resize-none h-24 outline-none" name='jobDescription' value={formState.jobDescription} onChange={handleChange} placeholder='Call to Action Concluding Statement...' />
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='pt-[6px]'>
                            <input
                                name='showCompany'
                                type="checkbox"
                                checked={formState.showCompany}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <input className="border p-1 w-full outline-none" name='company' value={formState.company} onChange={handleChange} placeholder='Company' />
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='pt-[6px]'>
                            <input
                                name='showLocation'
                                type="checkbox"
                                checked={formState.showLocation}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <input className="border p-1 w-full outline-none" name='location' value={formState.location} onChange={handleChange} placeholder='Job Location' />
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='pt-1'>
                            <input
                                name='showJobType'
                                type="checkbox"
                                checked={formState.showJobType}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <Select
                                className="basic-single w-full"
                                classNamePrefix="select"
                                placeholder="Full Time"
                                options={jobTypes}
                                name='jobType'
                                onChange={(value) => handleSelectChange('jobType', value)}

                            />
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='pt-1'>
                            <input
                                name='showJobDay'
                                type="checkbox"
                                checked={formState.showJobDay}
                                onChange={handleChange}
                                
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <Select
                                className="basic-single w-full"
                                classNamePrefix="select"
                                placeholder="Select Options..."
                                options={jobDays}
                                isMulti
                                components={animatedComponents}
                                name='jobDay'
                                onChange={(value) => handleSelectChange('jobDay', value)}


                            />
                        </div>
                    </div>
                    <div className='flex justify-end pt-2'>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded font-semibold">Proceed</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormField