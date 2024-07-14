# BurgerShop


👉 Dans le composant Home, créez un état "selectedBurgers" et initialisez le sous forme de tableau vide. Cet état vous permettra de stocker le nom des burgers sélectionnés.


👉  A la suite, ajoutez une fonction "selectBurger" qui prend comme argument "newBurger". Au clic sur un bouton "Select", cette fonction ajoutera le nom du burger sélectionné au tableau "selectedBurgers".


👉  Créez une seconde fonction "removeBurger" qui prend comme argument "burgerToDelete". Au clic sur le bouton "Remove all", les burgers "The Californian" (par exemple) seront retirés du tableau "selectedBurgers".


👉 Communiquez ces deux fonctions d’inverse data flow au composant Burger.


👉 Dans le composant Burger, créez un bouton "Select" (portant la classe "selectBtn") et un bouton "Remove all" (portant la classe "removeBtn").


👉 Complétez ces deux boutons pour qu’au clic du premier la fonction "selectBurger" se déclenche et au clic sur le second, la fonction "removeBurger". N’oubliez pas de transmettre l’information qui permettra de renseigner la valeur de l’argument "newBurger".


👉 Enfin, en utilisant l’état "selectedBurgers", complétez le return de votre composant Home pour que le nombre de burgers sélectionnés s’affiche après "Number of burgers selected:".



