import './App.css'
import FormField from "./components/FormField";
import PreviewDetails from "./components/PreviewDetails";
import JobList from "./components/JobList";
import { JobProvider } from "./context/JobContext";

function App() {

  return (
    <JobProvider>
      <div className="h-auto">
        <div className='w-full h-14 text-white bg-[#2d46b9] text-center text-2xl font-bold leading-loose'>Job Post Manager App</div>
        <div className="container mx-auto">
          <div className="px-10 pt-4 w-[85%] flex justify-center">
            <JobList />
            <FormField />
          </div>
        </div>
        <div className="container mx-auto flex justify-center">
          <div className='pt-6 w-[68%] me-10 pb-6'>
            <PreviewDetails />
          </div>
        </div>
      </div>
    </JobProvider>
  );
}

export default App;
