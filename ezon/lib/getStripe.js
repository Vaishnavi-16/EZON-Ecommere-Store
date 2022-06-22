import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51LCnc6SDudOtfgFw3e1pMSD5WwDHiSojYOcXrA2jKEEgU58Dc7NbOanFjL0mot90dl75qXLKNBq2Ys77TDI8QfH700SY5yWar6');
  }

  return stripePromise;
}

export default getStripe;
