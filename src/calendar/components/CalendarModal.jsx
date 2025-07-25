import Modal from "react-modal";
import { useState } from "react";
import { addHours, differenceInSeconds } from "date-fns";
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';


registerLocale('es', es);


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formValues, setFormValues] = useState({
    title: "Neil ",
    notes: "Indorato",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const onInputChange = ({ target }) => {
    setFormValues({
      ...setFormValues({
        ...formValues,
        [target.name]: target.value,
      }),
    });

    const onDateChange = (event,changing )  => {
      setFormValues({
        ...formValues,
        [changing]: event,
      });
    }
  };

  const onCloseModal = () => {
    console.log("Modal cerrado");
    setIsOpen(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const difference = differenceInSeconds(formValues.end, formValues.start)
   console.log({difference});
   
   if( isNaN(difference)){ 
    Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error');
 
    return; 
  }

  if (formValues.title.leng <=0 )
    console.log(formValues);

  // TODO:
  // cerrar modal 
  //remover errors en las pantallas
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      overlayClassName="modal-fondo"
      className="modal"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container">
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker 
          minDate={formValues.start}
          selected={formValues.start}
          onChange={(event) => onDateChange(event, 'start') }
            className="form-control"
          dateFormat="Pp"
          showTimeSelect 
          locale="es"
          timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <input className="form-control" placeholder="Fecha inicio" />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
