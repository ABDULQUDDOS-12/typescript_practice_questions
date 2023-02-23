//You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
const guestList: string[] = ['Mustufa Tola', 'Abdul Hannan', 'abdullah'];
const unableToAttend: string = guestList.splice(1, 1)[0]; // Remove Oprah Winfrey from the list
console.log(`${unableToAttend} is unable to attend the dinner.`);
guestList.push('Qazi sahab');
const dinnerInvitation = (name: string): string => {
  return `Dear ${name}, I would like to invite you to dinner at my home on Saturday night. It would be an honor to have you as my guest. Please let me know if you can attend. Sincerely, [Your Name]`;
};
guestList.forEach((guest) => {
  console.log(dinnerInvitation(guest));
});
