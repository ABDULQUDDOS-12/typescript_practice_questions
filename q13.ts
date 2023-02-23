//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
const dinnerInvitation = (name: string): string => {
    return `Dear ${name}, I would like to invite you to dinner at my home on Saturday night. It would be an honor to have you as my guest. Please let me know if you can attend. Sincerely, [Abdul Quddos]`;
  };
  
  // List of people to invite
  const guestList: string[] = ['Mustufa Tola', 'Qazi sahab', 'Abdul Hannan'];
  
  // Print invitation message for each guest
  guestList.forEach((guest) => {
    console.log(dinnerInvitation(guest));
  });