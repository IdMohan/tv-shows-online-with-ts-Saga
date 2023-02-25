 import {ImSpinner} from "react-icons/im"

 const LodingSpinner = ({className}: {className?: string}) => {
    return <ImSpinner className={`animate-spin ${className}`} />
 };

 export default LodingSpinner;