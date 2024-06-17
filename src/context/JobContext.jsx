import { createContext, useState, useEffect } from "react"

const JobContext = createContext()

export const JobProvider = ({children}) => {
    const [jobs, setJobs] = useState([]);
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [formState, setFormState] = useState({
        title: '',
        introduction: '',
        roles: '',
        experienceMin: '',
        experienceMax: '',
        qualification: '',
        salaryRange: '',
        jobDescription: '',
        company: '',
        location: '',
        jobType: '',
        jobDay: '',
        showTitle: true,
        showIntroduction: true,
        showRoles: true,
        showExperience: true,
        showQualification: true,
        showSalary: true,
        showDescription: true,
        showCompany: true,
        showLocation: true,
        showJobType: true,
        showJobDay: true
    });

    useEffect(() => {
        const selectedJob = jobs.find(job => job.id === selectedJobId);
        console.log(selectedJob);
        if (selectedJob) {
            setFormState({
                title: selectedJob.title,
                introduction: selectedJob.introduction,
                roles: selectedJob.roles,
                experienceMin: selectedJob.experienceMin,
                experienceMax: selectedJob.experienceMax,
                qualification: selectedJob.qualification,
                salaryRange: selectedJob.salaryRange,
                jobDescription: selectedJob.jobDescription,
                company: selectedJob.company,
                location: selectedJob.location,
                showTitle: selectedJob.showTitle,
                showIntroduction: selectedJob.showIntroduction,
                showRoles: selectedJob.showRoles,
                showExperience: selectedJob.showExperience,
                showQualification: selectedJob.showQualification,
                showSalary: selectedJob.showSalary,
                showDescription: selectedJob.showDescription,
                showCompany: selectedJob.showCompany,
                showLocation: selectedJob.showLocation,
                showJobType: selectedJob.showJobType,
                showJobDay: selectedJob.showJobDay,
            });
        } else {
            setFormState({
                title: '',
                introduction: '',
                roles: '',
                experienceMin: '',
                experienceMax: '',
                qualification: '',
                salaryRange: '',
                jobDescription: '',
                company: '',
                location: '',
                showTitle: true,
                showIntroduction: true,
                showRoles: true,
                showExperience: true,
                showQualification: true,
                showSalary: true,
                showDescription: true,
                showCompany: true,
                showLocation: true,
                showJobType: true,
                showJobDay: true
            });
        }
    }, [selectedJobId, jobs]);

    // empty the job form field when user click on new job
    const handleClickNewJob = () => {
        setSelectedJobId(null)
    };

    // select a random job
    const handleSelectJob = (id) => {
        setSelectedJobId(id)
    }

    // create a dublicate job from existing job
    const handleDuplicateJob = (id) => {
        const jobToDuplicate = jobs.find((job) => job.id === id);
        const dublicateJob = { ...jobToDuplicate, id: Date.now() };
        setJobs([...jobs, dublicateJob])
    }

    // delete a job
    const handleDeleteJob = (id) => {
        setJobs(jobs.filter((job) => job.id !== id));
        setSelectedJobId(null)

    }

    // Save a job from form field 
    const handleSaveJob = (job) => {
        if (selectedJobId) {
            setJobs(jobs.map((j) => (
                j.id === selectedJobId ? { ...j, ...job } : j
            )))
        }
        else {
            const newJob = {
                id: Date.now(),
                ...job,
            };
            setJobs([...jobs, newJob]);
            setSelectedJobId(newJob.id);
        }
    }

    return (
        <JobContext.Provider
            value={{
                jobs,
                selectedJobId,
                formState,
                setFormState,
                handleClickNewJob,
                handleSelectJob,
                handleDuplicateJob,
                handleDeleteJob,
                handleSaveJob
            }}
        >
            {children}
        </JobContext.Provider>
    );
}

export default JobContext