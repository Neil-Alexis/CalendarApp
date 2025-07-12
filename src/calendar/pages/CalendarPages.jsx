import { Navbar } from "../components/Navbar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar} from "react-big-calendar";
import { localizer } from "../../helpers/CalendarLocalizer";
import { addHours } from "date-fns";



const events = [{
  title:'Big Meeting',
  notes:'Big Meeting with big people',
  start:new Date(),
  end:addHours(new Date(), 2),
  bgColor:'#fafafa',
  user:{
    _id: '123',
    name: 'John Doe'
  }
}]


export const CalendarPages = () => {
  return (
    <>
  
  <Navbar />
 <div>

   <Calendar 
  culture="es"
  localizer={localizer}
  events={events}
  startAccessor="start"
  endAccessor="end"
 style={{ height: '100vh', padding: '20px' }}
views={['month', 'week', 'day', 'agenda']}

  
  
  
  />
 </div>
    </>
  )
}
