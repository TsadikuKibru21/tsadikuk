import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Python Developer
        <span className="text-textGreen tracking-wide"></span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        FEB 2024 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Analyzed client requirements and business processes to identify areas for Odoo customization.
          Designed and developed custom modules using OWL, XML, and Python to extend Odoo functionalities.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Ensured modules adhered to Odoo best practices for maintainability, scalability, and security.
Conducted thorough testing to ensure modules functioned as intended and integrated seamlessly with existing Odoo features.
Documented modules for future reference and maintenance.
Collaborated with internal teams (designers, project managers) to ensure modules met user needs.
      
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Performed data migrations or integrations with other systems.
Upgraded existing Odoo instances to new versions.
Provided technical support to Odoo users.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
