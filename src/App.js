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
          <div className="lg:px-10 px-2 pt-4 lg:w-[85%] w-full flex justify-center lg:flex-row flex-col">
            <JobList />
            <FormField />
          </div>
        </div>
        <div className="container mx-auto flex justify-center">
          <div className='pt-6 lg:w-[68%] w-full px-2 lg:px-0 lg:me-10 me-0 pb-6'>
            <PreviewDetails />
          </div>
        </div>
      </div>
    </JobProvider>
  );
}

export default App;
