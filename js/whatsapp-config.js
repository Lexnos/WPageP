/**
 * WhatsApp overlay button configuration.
 *
 * Edit the phone number and default messages here.
 */
window.WHATSAPP_CONFIG = {
  // Set to true to display the button ONLY on mobile devices / mobile viewports.
  // Set to false if you want it to appear on all devices.
  onlyMobile: true,

  // Destination phone number in international format without plus sign or hyphens.
  // Example: '17862120436' for +1 (786) 212-0436.
  phoneNumber: '17862120436',

  // Pre-filled initial chat message sent when tapping the WhatsApp button.
  defaultMessage: {
    en: 'Hello! I would like to get more information about insurance coverage.',
    es: '¡Hola! Me gustaría obtener más información sobre las opciones de seguro.'
  }
};
