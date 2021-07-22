export const rsvp = (info) => {
    return $.ajax({
        url: `/api/users/${info.id}`,
        method: "PATCH",
        data: {
            user: {
                friday: info.user.friday,
                saturday: info.user.saturday,
                sunday: info.user.sunday,
                diet: info.user.diet
            }
        }
    })
}