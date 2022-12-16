// GENERATOR ID FUNCTION
export const idGenerator = () => {
   const random = Math.random().toString(36).substr(2);
   const date = Date.now().toString(36);
   return random + date ;
}

// FOMATE DATE FUNCTION
export const formatDate = date => {
   const newDate = new Date(date);
   const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
   }

   return newDate.toLocaleDateString('en-ES', options);
}