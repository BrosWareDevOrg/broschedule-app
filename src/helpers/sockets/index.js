import io from 'socket.io-client';

export const socket = io(`${import.meta.env.VITE_SERVER}`);

export const confirmAppointment = async (callback) => {
  socket.emit('client:confirmAppointment', callback);
};
