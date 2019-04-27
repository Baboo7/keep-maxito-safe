import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toaster.css";

export class ToasterService {
  public static error = (message: string): void => {
    toast(message, {
      position: toast.POSITION.TOP_CENTER,
      className: "error"
    });
  };

  public static success = (message: string): void => {
    toast(message, {
      position: toast.POSITION.TOP_CENTER,
      className: "success"
    });
  };
}
