import React from 'react';
import Image from 'next/image';

import LogoInstitucional from './img/SNC+PNAB+MinC+Gov.png';

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <hr className="border-blue-900 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <p className="text-left text-md mt-5 dark:text-white text-blue-900">
        Esse material é fruto do Programa de Difusão Nacional - Funarte Redes das Artes, realizado pelo Laboratório do Futuro (entidade vinculada à Universidade Federal do Ceará) no ano de 2025.
      </p>
      <footer className="flex justify-center px-6 pt-5">
        <Image src={LogoInstitucional} alt="SNC + PNAB + MinC + Governo Federal" className="h-20 w-auto object-contain" />
      </footer>
    </div>
  );
};

export default Footer;
