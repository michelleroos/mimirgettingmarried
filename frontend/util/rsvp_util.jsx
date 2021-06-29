export const rsvp = (info) => {
    return $.ajax({
        url: "/api/users",
        method: "PATCH",
        data: {
            user: {
                friday: info.friday,
                saturday: info.saturday,
                sunday: info.sunday,
                diet: info.diet
            }
        }
    })
}