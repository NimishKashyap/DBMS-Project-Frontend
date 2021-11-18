import { useEffect, useState } from "react";

function userState() {
    const [loggedInState, useLoggedInState] = useState(false);
}

export default { loggedInState, useLoggedInState };
