import { FiSun, FiMoon, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SettingsToggle = () => {
  const theme = 'light';
  const [_,i18n] = useTranslation('global');

  // Toggle language between English and Spanish
  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{border: '1px solid #fff', borderRadius: '50%', padding: '8px'}} className="flex gap-2 absolute invisible top-4 z-50s w-full  ">
      {/* Language Toggle Button */}
      <motion.button
        onClick={()=>toggleLanguage('cn')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <FiGlobe className='text-2xl text-white' /> 
          </motion.div>
      </motion.button>

      {/* Theme Toggle Button */}
      <motion.button
        
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
          <motion.div
            
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            {theme === 'light' ? <FiMoon className='text-2xl text-white' /> : <FiSun className='text-2xl text-white' />}
          </motion.div>
      </motion.button>
    </div>
  );
};

export default SettingsToggle;
