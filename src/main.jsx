import React from 'react';
import { createRoot } from 'react-dom/client';
import Ibiza from './component/ibiza/ibiza';

const content = document.querySelector('#vivy');

const ibiza = <Ibiza />;

const root = createRoot(content);
root.render(ibiza);
