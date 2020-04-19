function divisorCheck(interger) {
    let value = [];
        if(interger % 2 == 0) value.push("yu");
        if (interger % 3 == 0) value.push("gi");
        if (interger % 5 == 0) value.push("oh");
        value = value.length > 1 ? value.join("-") : value[0]
        return (value || interger);
    }
    divisorCheck(100);
    divisorCheck(30);
