
// ============================= Creating an Observable with the Observable Constructor ==============================
import { Observable, of } from 'rxjs';

// Create a new Observable that emits a sequence of values over time
export const myObservable$ = new Observable<string>(observer => {
    // Emit values
    observer.next('Hello');
    observer.next('World');

    try {
        // Simulate an asynchronous action (e.g., an API call)
        setTimeout(() => {
            observer.next('Data from API after a delay');

            // Signal that the Observable is complete
            observer.complete();
        }, 2000); // 2 seconds delay
    }
    catch (ex) {
        observer.error(`Error occured.`);
    }
    finally {
        return () => {
            //console.log('Cleanup logic executed.');
        };
    }
});
