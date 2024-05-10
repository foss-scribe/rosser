const formatDate = (input) => {
    let options = { year: "numeric", month: "long", day: "numeric"};
    let dt = new Date(input)
    return dt.toLocaleDateString("en-GB", options);
}

export { formatDate }