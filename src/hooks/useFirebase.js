import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useHistory } from "react-router";

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const auth = getAuth()

    // Registration
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name)
                setAuthError('')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                })
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message)

            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // Login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                fetch(`https://frozen-chamber-03076.herokuapp.com/users/${userCredential?.user?.email}`)
                    .then(res => res.json())
                    .then(data => {
                        setAdmin(data.admin)
                        if (data.admin) {
                            const destination = '/dashboard'
                            history.replace(destination)
                        } else {
                            const destination = location?.state?.from || '/'
                            history.replace(destination)
                        }
                    })

                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // Logout 
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
        }).catch((error) => {
        }).finally(() => {
            setIsLoading(false)
        })
    }

    // Save user in Database
    const saveUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://frozen-chamber-03076.herokuapp.com/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed
    }, [])


    useEffect(() => {
        fetch(`https://frozen-chamber-03076.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user?.email])

    return {
        user,
        admin,
        authError,
        isLoading,
        registerUser,
        loginUser,
        logout
    }

}

export default useFirebase