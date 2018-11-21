import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
    private user: Observable<firebase.User>;
    
    constructor(public _afAuth: AngularFireAuth) {
        this.user = _afAuth.authState;
    }

    doFacebookLogin() {
        return new Promise<any>((resolve, reject) => {
            let provider = new firebase.auth.FacebookAuthProvider();
            this._afAuth.auth
                .signInWithPopup(provider)
                .then(res => {
                    resolve(res);
                }, err => {
                    console.log(err);
                    reject(err);
                })
        })
    }

    doLogout() {
        this._afAuth.auth.signOut().then(() => {
            //eventueel routen naar pagina
        });
    }
}