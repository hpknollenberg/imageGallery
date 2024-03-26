key up/down method

keyPosition: 1-5, 6-10

if eventListener click 
    equals keyPosition of that image
else
    default to 1

if eventListener keyup
    get displayed image keyPosition
    IF keyPosition == 10 then keyPosition = 1
    ELSE add 1 to keyPosition

if eventListener keydown
    get displayed image keyPosition
    IF keyPosition == 1 then keyPosition = 10
    ELSE subtract 1 from keyPosition