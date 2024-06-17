import React, { useContext } from 'react';
import JobContext from '../context/JobContext';

const PreviewDetails = () => {
    const { jobs, selectedJobId } = useContext(JobContext)
    const selectedJob = jobs.find(job => job.id === selectedJobId);
    if (!selectedJob) {
        return (
            <div className='p-4 w-full bg-white lg:px-14 px-4'>
                <h2 className="text-2xl font-bold mb-4">Job Preview Details</h2>
                <div className="">Select or create a job to see the preview.</div>
            </div>
        )
    }

    return (
        <div className="p-4 w-full border bg-white lg:px-14 px-4">
            <h2 className="text-2xl font-bold mb-4">Job Preview Details</h2>
            <div className='flex justify-between mt-8'>
                {selectedJob.showTitle && (
                    <div className="mb-4">
                        <h3 className='text-3xl font-bold text-gray-600'>{selectedJob.title}</h3>
                    </div>
                )}

                {selectedJob.showJobDay && (
                    <div className="mb-4 flex gap-2">
                        {
                            selectedJob.jobDay?.map((day, index) => (
                                <div key={index} className='font-semibold text-white rounded-xl py-1 px-4 bg-[#3b82f6]/[0.9]'>
                                    {day.value}
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>

            {selectedJob.showIntroduction && (
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Introduction</h3>
                    <p className='text-gray-600'>{selectedJob.introduction}</p>
                </div>
            )}

            {selectedJob.showRoles && (
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Roles & Responsibilities</h3>
                    <p className='text-gray-600'>{selectedJob.roles}</p>
                </div>
            )}

            {selectedJob.showExperience && (
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Prefered Experience: 
                        {selectedJob.experienceMin && selectedJob.experienceMax &&
                            <span className='text-gray-600 ms-2 font-normal'>{selectedJob.experienceMin.value} to {selectedJob.experienceMax.value} years</span>
                       }
                        </h3>
                </div>
            )}

            {selectedJob.showQualification && (
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Qualification: 
                        <span className='text-gray-600 ms-2 font-normal'>
                            {selectedJob.qualification}
                        </span>
                    </h3>
                </div>
            )}

            {selectedJob.showSalary && (
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Salary Range:
                        <span className='text-gray-600 ms-2 font-normal'>
                            {selectedJob.salaryRange}
                        </span>
                    </h3>
                </div>
            )}

            {selectedJob.showDescription && (
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Concluding Statement:</h3>
                    <p className='text-gray-600'>{selectedJob.jobDescription}</p>
                </div>
            )}

            {selectedJob.showCompany && (
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Company: 
                        <span className='text-gray-600 ms-2 font-normal'>
                            {selectedJob.company}
                        </span>
                    </h3>
                </div>
            )}


            {selectedJob.showLocation && (
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Location:
                        <span className='text-gray-600 ms-2 font-normal'>
                            {selectedJob.location}
                        </span>
                    </h3>
                </div>
            )}

            {selectedJob.showJobType && (
                <div className="mb-4">
                    <h3 className="text-lg font-bold">Job Type:
                        <span className='text-gray-600 ms-2 font-normal'>
                            {selectedJob?.jobType?.value}
                        </span>
                    </h3>
                </div>
            )}
        </div>
    );
};

export default PreviewDetails;
