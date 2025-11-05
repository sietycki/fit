import { Exercise, Skill } from './types';

export const EXERCISES_DB_ROLKI: { [key: string]: Exercise[] } = {
    beginner: [
        { name: 'Przysiady', video: 'https://www.youtube.com/watch?v=DlS-GAF8Edg', goal: '3 serie x 10 powtórzeń', tip: 'Poczuj napięcie w quadricepsach. Zwolnij opuszczanie - liczaj 1...2...3 sekundy.', breathing: '🫁 Wdech podczas opuszczania, wydech przy wstawaniu', tempo: '⏱️ 3-4 sekundy opuszczania', benefit: '🚴 Korzyść: MOC DO PRZODU (push-off power)', description: 'Stań w lekkim rozkroku, stopy na szerokość barków. Obniż biodra, jakbyś siadał na krześle, utrzymując proste plecy. Zejdź tak nisko, jak potrafisz, a następnie wróć do pozycji wyjściowej. Skup się na napięciu mięśni czworogłowych i pośladków.', goalReps: 10, restTime: 60 },
        { name: 'Wychylenia', video: 'https://www.youtube.com/watch?v=_GtHwxJgGiY', goal: '3 serie x 8 powtórzeń', tip: 'Skupiaj się na pośladkach. Kontrola jest ważna!', breathing: '🫁 Wdech - krok, wydech - powrót', tempo: '⏱️ Kontrolowany ruch', benefit: '🚴 Korzyść: JEDNOSTRONNA SIŁA', description: 'Zrób krok w przód i ugnij obie nogi w kolanach do kąta 90 stopni. Przednie kolano nie powinno wychodzić za linię palców stopy. Dynamicznie wróć do pozycji wyjściowej i powtórz na drugą nogę. To ćwiczenie buduje siłę i stabilność.', goalReps: 8, restTime: 60 },
        { name: 'Podnoszenia na palce', video: 'https://www.youtube.com/watch?v=k8ipHzKeAkQ', goal: '3 serie x 12 powtórzeń', tip: 'Każdy centymetr! Czuj łydki.', breathing: '🫁 Wdech - do góry, wydech - opuszczanie', tempo: '⏱️ 2 sekundy opuszczania', benefit: '🚴 Korzyść: STABILNOŚĆ KOSTKI', description: 'Stań prosto, stopy blisko siebie. Powoli unieś pięty, wspinając się na palce tak wysoko, jak to możliwe. Zatrzymaj ruch na sekundę, a następnie powoli opuść pięty. Poczuj pracę mięśni łydek.', goalReps: 12, restTime: 45 },
        { name: 'Box Jumps (Pudło 30cm)', video: 'https://www.youtube.com/watch?v=IZxyjW7MIAI', goal: '3 serie x 5 powtórzeń', tip: '💡 PLYOMETRIKA! SSC training - skok z maksymalną energią! +9.9cm skoczności (badania 2025)', breathing: '🫁 Wdech na dole, wydech ENERGIA przy skoku!', tempo: '⏱️ SZYBKI, eksplozywny', benefit: '🚴 Korzyść: MOC EKSPLOZYWNA + Lepsze przyspieszenia', description: 'Stań przed stabilnym podwyższeniem. Zrób lekki zamach rękami i dynamicznie wskocz obunóż na pudło, lądując miękko w półprzysiadzie. Zejdź, a nie zeskakuj. To ćwiczenie buduje eksplozywną moc nóg.', powerIntentRequired: 5, goalReps: 5, restTime: 90 },
        { name: 'Podnoszenia nogi w bok', video: 'https://www.youtube.com/watch?v=nWQrF2V_Kkw', goal: '3 serie x 10 powtórzeń', tip: 'Boczne mięśnie ud!', breathing: '🫁 Wdech - start, wydech - podnoszenie', tempo: '⏱️ Powolne', benefit: '🚴 Korzyść: BOCZNA STABILNOŚĆ', description: 'Stań prosto, przenieś ciężar ciała na jedną nogę. Drugą, wyprostowaną nogę, unieś w bok tak wysoko, jak potrafisz, bez przechylania tułowia. Powoli opuść nogę. Wzmacnia to boczne mięśnie bioder, kluczowe dla stabilności.', goalReps: 10, restTime: 45 },
        { name: 'Single-leg Balance Hold', video: 'https://www.youtube.com/watch?v=p1vGjdv4Z1g', goal: '3 serie x 30 sekund (każda noga)', tip: '💡 PROPRIOCEPTIVE! -45% ankle injuries! Stój na jednej nodze - oczy otwarte. Focus na stabilności!', breathing: '🫁 Spokojne, głębokie', tempo: '⏱️ STATYCZNY hold', benefit: '🚴 Korzyść: BALANCE +30%, mniej upadków na rolkach', description: 'Stań na jednej nodze, drugą lekko unieś. Skup wzrok na jednym punkcie i staraj się utrzymać równowagę. Napnij mięśnie brzucha i pośladków, aby ustabilizować pozycję. To kluczowe ćwiczenie dla poprawy balansu.', powerIntentRequired: 3, goalReps: 30, restTime: 60, timed: true },
        { name: 'Wall Sit Hold (Isometric)', video: 'https://www.youtube.com/watch?v=y-wV4Venusw', goal: '3 serie x 30-45 sekund', tip: '💡 ISOMETRIC! Statyczna kontrakcja - 90° kąt kolana. Czuj quadriceps pracujące!', breathing: '🫁 Głębokie, spokojne', tempo: '⏱️ STATYCZNY hold', benefit: '🚴 Korzyść: STRENGTH in specific ROM', description: 'Oprzyj plecy o ścianę i zsuń się w dół, aż twoje kolana będą zgięte pod kątem 90 stopni, jakbyś siedział na niewidzialnym krześle. Utrzymaj tę pozycję, czując napięcie w udach. To świetne ćwiczenie na wytrzymałość mięśniową.', powerIntentRequired: 3, goalReps: 40, restTime: 60, timed: true }
    ],
    intermediate: [
        { name: 'Przysiady', video: 'https://www.youtube.com/watch?v=DlS-GAF8Edg', goal: '3 serie x 12 powtórzeń', tip: 'Poczuj napięcie. Zwolnij opuszczanie!', breathing: '🫁 Wdech podczas opuszczania, wydech przy wstawaniu', tempo: '⏱️ 3-4 sekundy', benefit: '🚴 Korzyść: MOC DO PRZODU', description: 'Stań w lekkim rozkroku, stopy na szerokość barków. Obniż biodra, jakbyś siadał na krześle, utrzymując proste plecy. Zejdź tak nisko, jak potrafisz, a następnie wróć do pozycji wyjściowej. Skup się na napięciu mięśni czworogłowych i pośladków.', goalReps: 12, restTime: 75 },
        { name: 'Wychylenia', video: 'https://www.youtube.com/watch?v=_GtHwxJgGiY', goal: '3 serie x 10 powtórzeń', tip: 'Skupiaj się na pośladkach. Kontrola!', breathing: '🫁 Wdech - krok, wydech - powrót', tempo: '⏱️ Kontrolowany', benefit: '🚴 Korzyść: JEDNOSTRONNA SIŁA', description: 'Zrób krok w przód i ugnij obie nogi w kolanach do kąta 90 stopni. Przednie kolano nie powinno wychodzić za linię palców stopy. Dynamicznie wróć do pozycji wyjściowej i powtórz na drugą nogę. To ćwiczenie buduje siłę i stabilność.', goalReps: 10, restTime: 75 },
        { name: 'Hurdle Hops (Przeszkody 30-50cm)', video: 'https://www.youtube.com/watch?v=arUrwekihLI', goal: '3 serie x 8 powtórzeń', tip: '💡 PLYOMETRIKA! RSI training - reactive strength! Szybkie skoki przez przeszkody bez przerwy!', breathing: '🫁 Szybkie, rytmiczne', tempo: '⏱️ SZYBKI, ciągły', benefit: '🚴 Korzyść: REACTIVE STRENGTH + Bystrzejsze reagowanie', description: 'Ustaw kilka niskich przeszkód w jednej linii. Rytmicznie przeskakuj przez nie obunóż, starając się spędzać jak najmniej czasu na ziemi. Ruch ma być sprężysty i dynamiczny. To ćwiczenie rozwija siłę reaktywną.', powerIntentRequired: 5, goalReps: 8, restTime: 90 },
        { name: 'Lateral Bounds (Skoki Boczne)', video: 'https://www.youtube.com/watch?v=1Lo06atIYtI', goal: '3 serie x 6 powtórzeń (każda noga)', tip: '💡 PLYOMETRIKA! +30% agility (2025)! Maksymalny skok na bok - jedna noga do drugiej!', breathing: '🫁 Wdech przed skokiem, wydech przy lądowaniu', tempo: '⏱️ EKSPLOZYWNY', benefit: '🚴 Korzyść: BOCZNA MOC + Zakręty i manewry', description: 'Stań na jednej nodze. Z tej pozycji dynamicznie wybij się w bok, lądując na drugiej nodze. Utrzymaj równowagę przez chwilę, a następnie wykonaj skok w przeciwnym kierunku. Ćwiczenie to buduje boczną moc i zwinność.', powerIntentRequired: 4, goalReps: 6, restTime: 90 },
        { name: 'Podnoszenia na palce', video: 'https://www.youtube.com/watch?v=k8ipHzKeAkQ', goal: '3 serie x 15 powtórzeń', tip: 'Każde włókno łydki!', breathing: '🫁 Wdech - do góry, wydech - opuszczanie', tempo: '⏱️ 2 sekundy', benefit: '🚴 Korzyść: STABILNOŚĆ KOSTKI', description: 'Stań prosto, stopy blisko siebie. Powoli unieś pięty, wspinając się na palce tak wysoko, jak to możliwe. Zatrzymaj ruch na sekundę, a następnie powoli opuść pięty. Poczuj pracę mięśni łydek.', goalReps: 15, restTime: 60 },
        { name: 'Step-ups', video: 'https://www.youtube.com/watch?v=RLvbXXIWHos', goal: '3 serie x 12 powtórzeń', tip: 'Quadriceps i pośladki!', breathing: '🫁 Wdech - start, wydech - push', tempo: '⏱️ Kontrolowany', benefit: '🚴 Korzyść: POWER + COORDINATION', description: 'Stań przed stabilnym podwyższeniem (np. ławka, schodek). Postaw jedną stopę na podwyższeniu i wejdź na nie, unosząc drugie kolano. Kontrolowanie opuść nogę i wróć do pozycji wyjściowej. Zmieniaj nogę prowadzącą.', goalReps: 12, restTime: 75 }
    ],
    advanced: [
        { name: 'Przysiady z podskokiem', video: 'https://www.youtube.com/watch?v=IZxyjW7MIAI', goal: '4 serie x 12 powtórzeń', tip: 'MOC EKSPLOZYWNA! Maksimum szybkości!', breathing: '🫁 Wdech dół, wydech ENERGIA!', tempo: '⏱️ Szybki, dynamiczny', benefit: '🚴 Korzyść: MOC EKSPLOZYWNA', description: 'Wykonaj klasyczny przysiad. Gdy twoje biodra są w najniższej pozycji, dynamicznie wybij się w górę, wykonując wysoki podskok. Ląduj miękko, od razu przechodząc do kolejnego przysiadu. To ćwiczenie rozwija moc eksplozywną.', powerIntentRequired: 5, goalReps: 12, restTime: 90 },
        { name: 'Depth Jumps (Pudło 30-40cm)', video: 'https://www.youtube.com/watch?v=CJ-ku2jUQgs', goal: '3 serie x 3-5 powtórzeń', tip: '💡 PLYOMETRIKA ZAAWANSOWANA! ⚠️ Max 2x/tydzień (CNS stress)! Zjazd z pudła → natychmiastowy skok w górę!', breathing: '🫁 Wdech na dole, natychmiast wydech przy odbiciu', tempo: '⏱️ NATYCHMIASTOWY rebound', benefit: '🚴 Korzyść: PEAK POWER + Awaryjne hamowanie', description: 'Stań na stabilnym podwyższeniu. Zejdź z niego (nie zeskakuj), lądując na obu stopach. Natychmiast po kontakcie z podłożem, wybij się w górę tak wysoko, jak potrafisz. Minimalizuj czas kontaktu z ziemią.', powerIntentRequired: 5, warning: '⚠️ BARDZO intensywne - Max 2x/tydzień!', goalReps: 4, restTime: 120 },
        { name: 'Bounding (Skoki Naprzemienne)', video: 'https://www.youtube.com/watch?v=arUrwekihLI', goal: '3 serie x 20m (dystans)', tip: '💡 PLYOMETRIKA! +12-15% szybkości (2025)! Długie, rytmiczne skoki L-R-L-R!', breathing: '🫁 Rytmiczne, naturalne', tempo: '⏱️ RYTMICZNY, ciągły', benefit: '🚴 Korzyść: SZYBKOŚĆ + Rhythm jazdy', description: 'Wykonuj długie, naprzemienne skoki w przód, przypominające przesadzoną formę biegu. Skup się na maksymalnym wybiciu i długości każdego skoku. Ręce powinny pracować synchronicznie z nogami. Ćwiczenie rozwija szybkość i koordynację.', powerIntentRequired: 4, goalReps: 20, restTime: 90 },
        { name: 'Wychylenia bułgarskie', video: 'https://www.youtube.com/watch?v=CK3EqnuOQ_o', goal: '4 serie x 12 powtórzeń', tip: 'Asymetria! Przednia noga pracuje!', breathing: '🫁 Wdech - krok, wydech - push', tempo: '⏱️ Powolne, zaawansowane', benefit: '🚴 Korzyść: JEDNOSTRONNA SIŁA', description: 'Stań tyłem do podwyższenia. Oprzyj grzbiet jednej stopy na podwyższeniu. Wykonaj przysiad na nodze stojącej z przodu, obniżając biodra aż udo będzie równoległe do podłogi. Wróć do pozycji wyjściowej. To zaawansowane ćwiczenie na siłę jednej nogi.', goalReps: 12, restTime: 90 },
        { name: 'Podnoszenia (slow eccentric)', video: 'https://www.youtube.com/watch?v=k8ipHzKeAkQ', goal: '3 serie x 10 powtórzeń', tip: '5 sekund opuszczania! Każde włókno!', breathing: '🫁 Szybki wdech, powolny wydech', tempo: '⏱️ 5 sekund opuszczania', benefit: '🚴 Korzyść: STABILNOŚĆ KOSTKI', description: 'Wykonaj klasyczne wspięcie na palce. Kluczowa jest faza opuszczania – powinna trwać od 3 do 5 sekund. Powoli i kontrolowanie opuszczaj pięty poniżej poziomu podłoża, jeśli to możliwe, aby maksymalnie rozciągnąć mięśnie łydek.', goalReps: 10, restTime: 60 }
    ]
};

export const EXERCISES_DB_PUSH_PULL: { [key: string]: Exercise[] } = {
    beginner: [
        { name: 'Pompki Negatywne', video: 'https://www.youtube.com/watch?v=IODxDxX7oi0', goal: '3 serie x 5-8 powtórzeń', tip: '💡 KONTROLA FAZY EKSCENTRYCZNEJ: Opuszczaj ciało przez 3-5 sekund. To buduje fundamentalną siłę. Wypchnij w górę z kolan.', breathing: '🫁 Wdech podczas opuszczania, wydech przy powrocie', tempo: '⏱️ 4s w dół, 1s w górę', benefit: '💪 Korzyść: Budowa siły do pełnych pompek', description: 'Zacznij w pozycji deski (plank). Bardzo powoli (3-5 sekund) opuszczaj całe ciało w kierunku podłogi, utrzymując napięcie. Gdy klatka piersiowa dotknie podłoża, wejdź na kolana i wróć do pozycji wyjściowej. To buduje siłę potrzebną do pełnych pompek.', powerIntentRequired: 2, phase: 'Fundament', goalReps: 6, restTime: 75 },
        { name: 'Wiosłowanie odwrócone (Australijskie)', video: 'https://www.youtube.com/watch?v=3Yk_P8i-2-M', goal: '3 serie x 8-10 powtórzeń', tip: '💡 AKTYWACJA PLECÓW: Ściągnij łopatki. Ciało w jednej linii. Im bardziej pionowa pozycja, tym łatwiej.', breathing: '🫁 Wydech przyciągając, wdech opuszczając', tempo: '⏱️ 2s w górę, 2s w dół', benefit: '💪 Korzyść: Siła pleców, przygotowanie do podciągania', description: 'Połóż się pod niskim drążkiem lub stołem. Złap drążek nachwytem, stopy oprzyj na ziemi. Utrzymując ciało w jednej linii, przyciągnij klatkę piersiową do drążka, ściągając łopatki. Powoli opuść się z powrotem.', powerIntentRequired: 2, phase: 'Fundament', goalReps: 8, restTime: 75 },
        { name: 'Podciąganie z gumą oporową', video: 'https://www.youtube.com/watch?v=6miu_j-Dn4w', goal: '3 serie x 4-6 powtórzeń', tip: '💡 PRAWIDŁOWY WZORZEC RUCHOWY: Zacznij ruch od depresji i retrakcji łopatek. Dobierz gumę, która pozwala na kontrolowane wykonanie.', breathing: '🫁 Wydech w górę, wdech w dół', tempo: '⏱️ 1s w górę, 3s w dół', benefit: '💪 Korzyść: Siła najszerszego grzbietu', description: 'Zamocuj gumę oporową na drążku, tworząc pętlę. Umieść w niej stopę lub kolano. Złap drążek i podciągnij się, aż broda znajdzie się nad nim. Guma pomoże ci w najtrudniejszej fazie ruchu.', powerIntentRequired: 3, phase: 'Fundament', goalReps: 5, restTime: 90 },
        { name: 'Pompki na podwyższeniu (Incline Push-ups)', video: 'https://www.youtube.com/watch?v=Z0bRi_k_3-k', goal: '3 serie x 10-12 powtórzeń', tip: '💡 ZMNIEJSZENIE OBCIĄŻENIA: Im wyższe podparcie rąk, tym łatwiejsze ćwiczenie. Utrzymuj proste plecy i napięty brzuch.', breathing: '🫁 Wdech w dół, wydech w górę', tempo: '⏱️ 2s w dół, 1s w górę', benefit: '💪 Korzyść: Wzmacnianie klatki piersiowej', description: 'Oprzyj dłonie na stabilnym podwyższeniu (np. ławce, parapecie). Wykonaj pompkę, obniżając klatkę piersiową w kierunku podwyższenia. Im wyższe podparcie, tym łatwiejsze ćwiczenie. Utrzymuj proste plecy.', powerIntentRequired: 2, phase: 'Fundament', goalReps: 10, restTime: 60 },
        { name: 'Plank', video: 'https://www.youtube.com/watch?v=kL_NJAk5A2o', goal: '3 serie x 30-60 sekund', tip: '💡 STABILIZACJA CENTRALNA: Ciało w jednej linii od głowy do pięt. Napnij brzuch i pośladki. Nie pozwól biodrom opaść.', breathing: '🫁 Oddychaj spokojnie i miarowo', tempo: '⏱️ STATYCZNY hold', benefit: '💪 Korzyść: Wzmacnianie całego "core"', description: 'Przyjmij pozycję deski, opierając się na przedramionach i palcach stóp. Utrzymuj ciało w idealnie prostej linii od głowy do pięt. Napnij mocno mięśnie brzucha i pośladków. Nie pozwól biodrom opaść.', powerIntentRequired: 2, phase: 'Fundament', goalReps: 45, restTime: 60, timed: true },
        { name: 'Band Face Pulls', video: 'https://www.youtube.com/watch?v=XO7l7MJ6k3E', goal: '3 serie x 15 powtórzeń', tip: '💡 ZDROWIE BARKÓW: Ćwiczenie prewencyjne. Skup się na rotacji zewnętrznej i ściąganiu łopatek. Nie używaj zbyt mocnej gumy.', breathing: '🫁 Wydech przyciągając, wdech wracając', tempo: '⏱️ Wolno i kontrolowanie', benefit: '💪 Korzyść: Wzmacnianie rotatorów, poprawa postawy', description: 'Przymocuj gumę oporową na wysokości twarzy. Złap ją oburącz i przyciągnij w kierunku czoła, jednocześnie rotując ramiona na zewnątrz. Skup się na ściąganiu łopatek. To doskonałe ćwiczenie na zdrowie barków.', powerIntentRequired: 1, phase: 'Prewencja', goalReps: 15, restTime: 45 }
    ],
    intermediate: [
        { name: 'Pompki Klasyczne', video: 'https://www.youtube.com/watch?v=IODxDxX7oi0', goal: '4 serie x 8-12 powtórzeń', tip: '💡 PEŁNY ZAKRES RUCHU: Klatka piersiowa tuż nad podłogą. Ciało w jednej linii od głowy do stóp. Napięty core!', breathing: '🫁 Wdech w dół, wydech w górę', tempo: '⏱️ 2s w dół, 1s w górę', benefit: '💪 Korzyść: Siła i hipertrofia klatki, tricepsów', description: 'Przyjmij pozycję deski z dłońmi rozstawionymi nieco szerzej niż barki. Obniż ciało, aż klatka piersiowa znajdzie się tuż nad podłogą. Utrzymuj ciało w jednej linii i napięty brzuch. Dynamicznie wypchnij się w górę.', powerIntentRequired: 3, phase: 'Hipertrofia', goalReps: 10, restTime: 90 },
        { name: 'Podciąganie (pełne)', video: 'https://www.youtube.com/watch?v=eGo4IYlbE5g', goal: '4 serie x 5-8 powtórzeń', tip: '💡 SIŁA CIĄGNIĘCIA: Broda nad drążkiem, pełny wyprost w stawie łokciowym na dole. Kontroluj fazę negatywną.', breathing: '🫁 Wydech w górę, wdech w dół', tempo: '⏱️ 1s w górę, 3s w dół (MAX TUT)', benefit: '💪 Korzyść: Rozwój pleców i bicepsów', description: 'Złap drążek nachwytem na szerokość barków. Zaczynając od pełnego zwisu, podciągnij się, aż broda znajdzie się nad drążkiem. Skup się na pracy pleców i ściąganiu łopatek. Kontrolowanie opuść się do pozycji wyjściowej.', powerIntentRequired: 4, phase: 'Siła', goalReps: 6, restTime: 120 },
        { name: 'Pompki "Pike"', video: 'https://www.youtube.com/watch?v=3Wj McQu4_BY', goal: '3 serie x 6-10 powtórzeń', tip: '💡 NACISK NA BARKI: Ciało w kształcie odwróconej litery "V". Obniżaj czubek głowy w kierunku podłogi.', breathing: '🫁 Wdech w dół, wydech w górę', tempo: '⏱️ 2s w dół, 1s w górę', benefit: '💪 Korzyść: Siła barków, przygotowanie do pompek w staniu na rękach', description: 'Ustaw ciało w pozycji odwróconej litery \'V\', z biodrami wysoko. Z tej pozycji uginaj ramiona, obniżając czubek głowy w kierunku podłogi między dłońmi. To ćwiczenie przenosi nacisk na mięśnie naramienne.', powerIntentRequired: 3, phase: 'Hipertrofia', goalReps: 8, restTime: 90 },
        { name: 'Podciąganie "Chin-up"', video: 'https://www.youtube.com/watch?v=brhRXlOhsAM', goal: '3 serie x 6-10 powtórzeń', tip: '💡 AKCENT NA BICEPS: Chwyt podchwytem na szerokość barków. Mocniej angażuje mięśnie dwugłowe ramienia.', breathing: '🫁 Wydech w górę, wdech w dół', tempo: '⏱️ 1s w górę, 3s w dół', benefit: '💪 Korzyść: Wzmacnianie bicepsów i pleców', description: 'Złap drążek podchwytem na szerokość barków. Podciągnij się, aż broda znajdzie się nad drążkiem. Ten wariant mocniej angażuje bicepsy w porównaniu do klasycznego podciągania. Powoli opuść się w dół.', powerIntentRequired: 4, phase: 'Siła', goalReps: 8, restTime: 120 },
        { name: 'Pompki "Diamentowe"', video: 'https://www.youtube.com/watch?v=gk-OMGvwnsc', goal: '3 serie x 8-12 powtórzeń', tip: '💡 IZOLACJA TRICEPSÓW: Dłonie blisko siebie, tworząc kształt diamentu. Łokcie prowadź blisko ciała.', breathing: '🫁 Wdech w dół, wydech w górę', tempo: '⏱️ 2s w dół, 1s w górę', benefit: '💪 Korzyść: Wzmacnianie tricepsów', description: 'Ustaw dłonie blisko siebie, tak aby kciuki i palce wskazujące tworzyły kształt diamentu. Wykonaj pompkę, prowadząc łokcie blisko tułowia. To ćwiczenie intensywnie angażuje tricepsy.', powerIntentRequired: 3, phase: 'Hipertrofia', goalReps: 10, restTime: 90 }
    ],
    advanced: [
        { name: 'Pompki "Archer"', video: 'https://www.youtube.com/watch?v=5c2E3821xG8', goal: '4 serie x 3-5 powtórzeń na stronę', tip: '💡 SIŁA UNILATERALNA: Przenoś ciężar ciała na jedną rękę, podczas gdy druga jest wyprostowana i stabilizuje. Krok do pompki na jednej ręce.', breathing: '🫁 Wdech w dół, wydech w górę', tempo: '⏱️ 2s w dół, 1s eksplozywnie w górę', benefit: '💪 Korzyść: Ogromna siła jednej ręki, stabilizacja', description: 'Rozstaw dłonie znacznie szerzej niż w klasycznej pompce. Obniż ciało w kierunku jednej ręki, zginając ją w łokciu, podczas gdy druga ręka pozostaje niemal prosta. Wypchnij się z powrotem do środka i powtórz na drugą stronę. To krok w stronę pompki na jednej ręce.', powerIntentRequired: 5, phase: 'Siła', goalReps: 4, restTime: 150 },
        { name: 'Podciąganie "Archer"', video: 'https://www.youtube.com/watch?v=D0N52-S-d-c', goal: '4 serie x 2-4 powtórzenia na stronę', tip: '💡 ZAAWANSOWANA SIŁA PLECÓW: Przyciągaj się do jednej ręki, druga prosta dla stabilizacji. Pełna kontrola jest kluczowa.', breathing: '🫁 Wydech w górę, wdech w dół', tempo: '⏱️ 1s w górę, 3s w dół', benefit: '💪 Korzyść: Budowanie siły do podciągania na jednej ręce', description: 'Złap drążek szerokim nachwytem. Podciągaj się w kierunku jednej ręki, jednocześnie prostując drugą w bok. Twoje ciało powinno przesuwać się w poziomie. Wróć do środka i powtórz na drugą stronę. Buduje siłę do podciągania na jednej ręce.', powerIntentRequired: 5, phase: 'Siła', goalReps: 3, restTime: 180 },
        { name: 'Pompki "Pseudo Planche"', video: 'https://www.youtube.com/watch?v=FwWVvSZ0P0c', goal: '4 serie x 6-8 powtórzeń', tip: '💡 PROGRESJA DO PLANCHE: Dłonie na wysokości bioder, palce skierowane na zewnątrz. Im dalej pochylisz się do przodu, tym trudniej.', breathing: '🫁 Wdech w dół, wydech w górę', tempo: '⏱️ 2s w dół, 1s w górę', benefit: '💪 Korzyść: Niesamowita siła barków i core', description: 'Ustaw dłonie na wysokości bioder, z palcami skierowanymi na zewnątrz lub do tyłu. Pochyl ciało maksymalnie do przodu, przenosząc ciężar na barki. Wykonaj pompkę w tej pozycji. To ćwiczenie buduje siłę potrzebną do gimnastycznego elementu \'planche\'.', powerIntentRequired: 4, phase: 'Skill', goalReps: 6, restTime: 120 },
        { name: 'Pompki eksplozywne (z klaśnięciem)', video: 'https://www.youtube.com/watch?v=uG7_bSQdCyo', goal: '3 serie x 5-8 powtórzeń', tip: '💡 MOC EKSPLOZYWNA: Wypchnij się z podłogi z taką siłą, aby móc klasnąć w dłonie. Ląduj miękko.', breathing: '🫁 Wdech w dół, wydech eksplozywny', tempo: '⏱️ 1s w dół, EKSPLOZYWNIE w górę', benefit: '💪 Korzyść: Rozwój mocy i szybkich włókien mięśniowych', description: 'Wykonaj klasyczną pompkę, ale fazę wypychania w górę wykonaj z maksymalną siłą. Twoje dłonie powinny oderwać się od podłogi, dając ci czas na klaśnięcie. Miękko wyląduj i przejdź do kolejnego powtórzenia.', powerIntentRequired: 5, phase: 'Moc', warning: '⚠️ Zaawansowana technika!', goalReps: 6, restTime: 120 },
        { name: 'Podciąganie L-Sit', video: 'https://www.youtube.com/watch?v=d_iA4pS_f7k', goal: '3 serie x 4-6 powtórzeń', tip: '💡 SIŁA + CORE: Utrzymuj nogi prosto i równolegle do podłogi przez cały ruch. Wymaga ogromnej siły brzucha.', breathing: '🫁 Wydech w górę, wdech w dół', tempo: '⏱️ Kontrolowany i stabilny', benefit: '💪 Korzyść: Połączenie siły pleców i core', description: 'Złap drążek i unieś wyprostowane nogi, aż będą równoległe do podłogi (pozycja L-sit). Utrzymując tę pozycję nóg, wykonaj pełne podciągnięcie. Wymaga to ogromnej siły pleców i mięśni brzucha.', powerIntentRequired: 5, phase: 'Skill', warning: '⚠️ Elitarny poziom siły!', goalReps: 5, restTime: 180 }
    ]
};

export const SKILLS_DB_ROLKI: Skill[] = [
    // --- BASIC ---
    {
        id: 'fwd-swizzle', name: 'Jazda "choinką" (Forward Swizzles)',
        description: 'Absolutny fundament i silnik napędowy na rolkach. Ruch "choinki" to najważniejsza technika generowania prędkości bez odrywania rolek od ziemi, ucząca fundamentalnej pracy na krawędziach wewnętrznych i zewnętrznych. Opanowanie go to jak nauka chodzenia – otwiera drzwi do całej reszty i buduje pewność siebie.',
        difficulty: 'beginner', category: 'basic', video: 'https://www.youtube.com/watch?v=lH8LExN_tW0',
        prerequisites: [],
        keyPoints: ['Utrzymuj bardzo niską pozycję (głęboko ugięte kolana), klatka piersiowa uniesiona.', 'Rysuj kształt cytryny: rozszerzaj ruch od pięt, łącz nogi pracując palcami.', 'Używaj rąk wyciągniętych do przodu lub na boki, aby utrzymać balans.', 'Wzrok skieruj daleko przed siebie, a nie na swoje stopy – to klucz do równowagi.'],
        commonMistakes: ['Prostowanie nóg w kolanach, co natychmiast zabija pęd.', 'Patrzenie na stopy, co powoduje utratę równowagi i garbienie się.', 'Zbyt mały zakres ruchu, niegenerujący prędkości.', 'Zapominanie o pracy bioder, ruch wychodzi z całego ciała.']
    },
    {
        id: 'one-foot-balance', name: 'Jazda na jednej nodze',
        description: 'Kamień węgielny rolkarstwa. Absolutnie wszystko, co zaawansowane – od skoków po slajdy i obroty – opiera się na stabilnej jeździe na jednej nodze. To Twój test równowagi, siły i kontroli. Im lepiej opanujesz tę umiejętność, tym szybciej będziesz się rozwijać we wszystkich innych dziedzinach.',
        difficulty: 'beginner', category: 'basic', video: 'https://www.youtube.com/watch?v=uewkOZR4L-s',
        prerequisites: ['fwd-swizzle'],
        keyPoints: ['Mocno ugnij nogę, na której stoisz – to klucz do stabilności i amortyzacji.', 'Trzymaj wolną nogę blisko ciała (z przodu lub z tyłu), aby zachować środek ciężkości.', 'Napnij mięśnie core (brzuch i plecy), aby ustabilizować tułów jak gorset.', 'Skup wzrok na jednym punkcie w oddali, to "kotwica" dla Twojego balansu.'],
        commonMistakes: ['Stanie na prostej, zablokowanej nodze (tzw. "locked knee").', 'Chaotyczne machanie rękami; używaj ich subtelnie i szeroko do balansu.', 'Opuszczanie biodra po stronie uniesionej nogi.', 'Przechylanie tułowia na boki zamiast utrzymywania go w pionie.']
    },
    {
        id: 'a-frame-turn', name: 'Skręcanie A-Frame',
        description: 'Najbezpieczniejsza i najbardziej intuicyjna technika skręcania dla początkujących. Z szeroko rozstawionymi nogami, przypominającymi kształt litery "A", uczy przenoszenia ciężaru ciała i podstawowej pracy na krawędziach. To fundament, który pozwoli Ci kontrolować kierunek jazdy.',
        difficulty: 'beginner', category: 'basic', video: 'https://www.youtube.com/watch?v=BVxktKNAwdY',
        prerequisites: ['fwd-swizzle'],
        keyPoints: ['Przenieś około 70% ciężaru ciała na zewnętrzną nogę w zakręcie.', 'Pochyl obie rolki na krawędzie – wewnętrzną i zewnętrzną, tworząc kształt litery A.', 'Patrz tam, gdzie chcesz jechać – ciało naturalnie podąży za wzrokiem i ramionami.', 'Utrzymuj niską pozycję z rękoma z przodu dla większej stabilności.'],
        commonMistakes: ['Stanie prosto zamiast w niskiej, "agresywnej" pozycji.', 'Skręcanie tylko biodrami, bez pochylania rolek na krawędzie.', 'Przypadkowe krzyżowanie nóg.', 'Przenoszenie ciężaru na nogę wewnętrzną, co prostuje tor jazdy.']
    },
    {
        id: 'parallel-turn', name: 'Skręt równoległy (Parallel Turn)',
        description: 'Płynny i efektywny sposób na skręcanie przy wyższych prędkościach. Obie stopy pozostają równolegle do siebie, a skręt jest inicjowany przez pochylenie całego ciała i rolek na krawędzie. To technika używana w narciarstwie, która świetnie przenosi się na rolki.',
        difficulty: 'intermediate', category: 'basic', video: 'https://www.youtube.com/watch?v=QGIzTQKO9S4',
        prerequisites: ['a-frame-turn'],
        keyPoints: ['Ustaw stopy na szerokość bioder, równolegle do siebie.', 'Zainicjuj skręt przez obrócenie górnej części ciała (głowa, ramiona) w kierunku, w którym chcesz jechać.', 'Pochyl obie rolki na te same krawędzie (np. obie na wewnętrzne, by skręcić w lewo).', 'Utrzymuj niską pozycję z ugiętymi kolanami i kostkami.'],
        commonMistakes: ['Skręcanie tylko nogami, bez zaangażowania tułowia.', 'Brak pochylenia rolek na krawędzie (jazda "na płasko").', 'Zbyt wysoka, niestabilna pozycja.', 'Krzyżowanie nóg zamiast trzymania ich równolegle.']
    },
     {
        id: 'lunge-turn', name: 'Skręt w выпаде (Lunge Turn)',
        description: 'Bardzo stabilna i potężna technika skręcania, idealna do kontrolowania prędkości na zjazdach. Polega na wykonaniu głębokiego wypadu, gdzie jedna noga jest z przodu, a druga z tyłu, co tworzy długą i stabilną bazę.',
        difficulty: 'intermediate', category: 'basic', video: '',
        prerequisites: ['a-frame-turn', 'one-foot-balance'],
        keyPoints: ['Zejdź nisko w pozycję wypadu, zginając przednią nogę i prostując tylną.', 'Większość ciężaru (ok. 80%) spoczywa na przedniej nodze.', 'Skręt jest kontrolowany przez delikatne pochylenie przedniej rolki na krawędź.', 'Użyj tułowia i ramion do prowadzenia skrętu.'],
        commonMistakes: ['Zbyt mały rozstaw nóg, brak stabilności.', 'Przenoszenie ciężaru na tylną nogę.', 'Zbyt wysoka, niestabilna pozycja.', 'Gwałtowne ruchy zamiast płynnego wejścia w pozycję.']
    },
    {
        id: 'bwd-skating', name: 'Jazda tyłem (Backward Swizzles)',
        description: 'Otwiera zupełnie nowy wymiar jazdy i płynności. Początkowo może wydawać się nienaturalna, ale jest absolutną podstawą dla ogromnej liczby trików i przejść. Polega na wykonywaniu odwróconych "cytrynek" (od palców do pięt), regularnie patrząc przez ramię.',
        difficulty: 'intermediate', category: 'basic', video: 'https://www.youtube.com/watch?v=pGXxrmTC2ho',
        prerequisites: ['fwd-swizzle'],
        keyPoints: ['Ciągle oglądaj się przez ramię, aby widzieć, dokąd jedziesz.', 'Wykonuj lustrzany ruch "choinki" (od palców do pięt).', 'Trzymaj ciężar ciała lekko na przedniej części rolek (na śródstopiu).', 'Trzymaj ręce z przodu dla lepszego balansu, jakbyś niósł tacę.'],
        commonMistakes: ['Nieoglądanie się za siebie (bardzo niebezpieczne!).', 'Przenoszenie ciężaru na pięty, co prowadzi do upadków do tyłu.', 'Usztywnianie ciała ze strachu zamiast pozostania w zrelaksowanej, niskiej pozycji.']
    },
    {
        id: 'bwd-one-foot', name: 'Jazda tyłem na jednej nodze',
        description: 'Logiczny następny krok po opanowaniu jazdy tyłem. Ta umiejętność jest kluczowa dla zaawansowanych przejść, obrotów i trików wykonywanych tyłem. Wymaga znacznie większej równowagi i kontroli niż jazda tyłem na dwóch nogach.',
        difficulty: 'intermediate', category: 'basic', video: 'https://www.youtube.com/watch?v=pGXxrmTC2ho',
        prerequisites: ['bwd-skating', 'one-foot-balance'],
        keyPoints: ['Mocno ugnij nogę podporową i utrzymuj niską pozycję.', 'Regularnie patrz przez ramię w kierunku jazdy.', 'Użyj wolnej nogi jako przeciwwagi do utrzymania balansu.', 'Zacznij od bardzo krótkich prób, stopniowo zwiększając dystans.'],
        commonMistakes: ['Prostowanie nogi podporowej.', 'Zapominanie o patrzeniu za siebie.', 'Zbyt wysoka, niestabilna pozycja.', 'Próba wykonania bez solidnego opanowania jazdy tyłem na dwóch nogach.']
    },
    {
        id: 'heel-toe-rolls', name: 'Heel-Toe Rolls',
        description: 'Podstawowa umiejętność slalomowa polegająca na płynnej jeździe do przodu, balansując na tylnym kole jednej rolki i przednim drugiej. To doskonałe ćwiczenie na równowagę i przygotowanie do manuali i bardziej skomplikowanych ruchów.',
        difficulty: 'intermediate', category: 'basic', video: 'https://www.youtube.com/watch?v=n6IpKKcehKw',
        prerequisites: ['one-foot-balance'],
        keyPoints: ['Ustaw stopy w jednej linii, jedna za drugą.', 'Przenieś ciężar ciała tak, aby balansować na pięcie tylnej rolki i palcach przedniej.', 'Użyj rąk do utrzymania równowagi.', 'Patrz przed siebie, a nie na stopy.'],
        commonMistakes: ['Zbyt gwałtowne przenoszenie ciężaru.', 'Zbyt duża odległość między stopami.', 'Usztywnianie nóg i kostek.', 'Brak płynności w ruchu.']
    },
    {
        id: 'fwd-crossover', name: 'Przekładanka do przodu',
        description: 'Niezbędna technika do efektywnego i szybkiego pokonywania zakrętów. Polega na krzyżowaniu nogi zewnętrznej nad wewnętrzną, z jednoczesnym mocnym odepchnięciem nogą spod spodu (tzw. "underpush"). To kluczowy element w jeździe szybkiej, hokeju i dynamicznym poruszaniu się po mieście.',
        difficulty: 'intermediate', category: 'basic', video: 'https://www.youtube.com/watch?v=vVKPWNliUV4',
        prerequisites: ['a-frame-turn', 'one-foot-balance'],
        keyPoints: ['Noga zewnętrzna zawsze krzyżuje się NAD nogą wewnętrzną.', 'Obie rolki muszą być mocno pochylone na krawędziach w kierunku zakrętu.', 'Mocno odpychaj się nogą, która jest pod spodem (underpush) - to generuje prędkość.', 'Trzymaj niską, atletyczną pozycję przez cały czas trwania zakrętu.'],
        commonMistakes: ['Podnoszenie ciała podczas krzyżowania nóg.', 'Stawianie skrzyżowanej stopy zbyt blisko lub na płasko, bez krawędzi.', 'Brak pochylenia całego ciała do wewnątrz zakrętu.', 'Zapominanie o "underpushu", co sprawia, że ruch nie generuje prędkości.']
    },
    {
        id: 'mohawk-transition', name: 'Przejście Mohawk (przód-tył)',
        description: 'Niezbędne, płynne przejście z jazdy przodem na jazdę tyłem bez odrywania rolek od ziemi. Polega na otwarciu bioder na 180 stopni, utrzymując rolki na tej samej linii. To fundament, który łączy triki i pozwala na ciągłą, nieprzerwaną jazdę.',
        difficulty: 'intermediate', category: 'basic', video: 'https://www.youtube.com/watch?v=zJrs1uYCG6U',
        prerequisites: ['one-foot-balance', 'a-frame-turn'],
        keyPoints: ['Zainicjuj ruch otwierając biodra na zewnątrz, jakbyś chciał pokazać komuś sprzączkę paska.', 'Przenieś ciężar ciała na nogę prowadzącą przed wykonaniem obrotu.', 'Trzymaj stopy na tej samej linii podczas przejścia (tzw. "on the line").', 'Utrzymuj niską pozycję dla maksymalnej stabilności.'],
        commonMistakes: ['Podnoszenie się podczas przejścia.', 'Brak płynnego przeniesienia ciężaru ciała.', 'Zbyt małe otwarcie bioder, co blokuje ruch.', 'Ustawianie stóp w kształt litery V zamiast na jednej linii.']
    },
    {
        id: 'bwd-crossover', name: 'Przekładanka do tyłu',
        description: 'Technika pozwalająca na nabieranie prędkości i efektywne skręcanie podczas jazdy tyłem. Jest to lustrzane odbicie przekładanki do przodu i kluczowa umiejętność w hokeju, jeździe figurowej i freeskatingu. Wymaga dobrej równowagi i świadomości przestrzennej.',
        difficulty: 'advanced', category: 'basic', video: 'https://www.youtube.com/watch?v=vVKPWNliUV4',
        prerequisites: ['bwd-skating', 'fwd-crossover'],
        keyPoints: ['Noga wewnętrzna krzyżuje się NAD nogą zewnętrzną (odwrotnie niż do przodu).', 'Patrz przez ramię w kierunku jazdy.', 'Mocno odpychaj się nogą spod spodu (underpush) dla generowania prędkości.', 'Trzymaj biodra i tułów nisko i stabilnie.'],
        commonMistakes: ['Nieoglądanie się za siebie.', 'Zbyt wysoka pozycja ciała.', 'Brak mocnego odepchnięcia nogą spod spodu.', 'Krzyżowanie nogi zewnętrznej nad wewnętrzną (jak w jeździe do przodu).']
    },
    
    // --- SLIDES ---
    {
        id: 'heel-brake-stop', name: 'Hamowanie hamulcem piętowym',
        description: 'Najbardziej podstawowa i najbezpieczniejsza metoda hamowania dla początkujących. Wykorzystuje klocek hamulcowy zamontowany na pięcie jednej z rolek. Opanowanie go to absolutna podstawa bezpiecznego poruszania się, zanim nauczysz się bardziej zaawansowanych technik.',
        difficulty: 'beginner', category: 'slides', video: 'https://www.youtube.com/watch?v=BVxktKNAwdY',
        prerequisites: [],
        keyPoints: ['Przesuń nogę z hamulcem do przodu, tak aby rolki były w pozycji "nożyc".', 'Przenieś większość ciężaru (ok. 80%) na tylną nogę, aby odciążyć nogę hamującą.', 'Unieś palce nogi hamującej, aby docisnąć klocek hamulcowy do podłoża.', 'Utrzymuj niską pozycję i ugięte kolana dla maksymalnej stabilności.'],
        commonMistakes: ['Przenoszenie zbyt dużej wagi na nogę z hamulcem, co prowadzi do utraty równowagi.', 'Zbyt gwałtowne dociskanie hamulca.', 'Prostowanie nóg i usztywnianie ciała ze strachu.', 'Nieustawienie nóg w pozycji "nożyc".']
    },
    {
        id: 't-stop', name: 'Hamowanie T-Stop',
        description: 'Twoja podstawowa i najważniejsza umiejętność hamowania po opanowaniu hamulca. Polega na delikatnym ciągnięciu jednej rolki prostopadle za drugą, co tworzy tarcie i pozwala na kontrolowane wytracanie prędkości. Niezbędna do bezpiecznego poruszania się w mieście.',
        difficulty: 'beginner', category: 'slides', video: 'https://www.youtube.com/watch?v=6uNC7Ujszos',
        prerequisites: ['one-foot-balance'],
        keyPoints: ['Przenieś 95% wagi na nogę prowadzącą. Noga hamująca ma tylko "muskać" podłoże.', 'Noga hamująca powinna być ustawiona idealnie prostopadle (kąt 90 stopni) do nogi prowadzącej.', 'Delikatnie dociskaj wszystkie cztery koła nogi hamującej do podłoża.', 'Utrzymuj wyprostowaną postawę i napięty core, aby uniknąć obracania się.'],
        commonMistakes: ['Przenoszenie zbyt dużej wagi na nogę hamującą (prowadzi do utraty kontroli).', 'Ustawianie nogi hamującej pod kątem, co powoduje niechciany skręt.', 'Szarpany, niestabilny ruch zamiast płynnego docisku.', 'Pochylanie się do przodu.']
    },
     {
        id: 'powerstop', name: 'Powerstop',
        description: 'Bardzo skuteczna i stabilna metoda hamowania awaryjnego. Obie nogi pracują razem, jedna pcha do przodu, a druga hamuje bokiem, tworząc bardzo stabilną pozycję. Jest to często mylone z Powerslidem, ale jest znacznie łatwiejsze do nauczenia.',
        difficulty: 'intermediate', category: 'slides', video: '',
        prerequisites: ['t-stop', 'lunge-turn'],
        keyPoints: ['Zacznij od szerokiego łuku, aby ustawić ciało bokiem.', 'Zejdź nisko w pozycję wypadu, jedna noga z przodu, druga z tyłu.', 'Przednia noga pcha, tylna noga hamuje na wewnętrznej krawędzi.', 'Utrzymuj 70-80% ciężaru ciała na przedniej nodze.'],
        commonMistakes: ['Przenoszenie zbyt dużej wagi na tylną nogę hamującą.', 'Zbyt wysoka pozycja.', 'Brak wcześniejszego wejścia w łuk.', 'Zbyt gwałtowna próba hamowania.']
    },
    {
        id: 'powerslide', name: 'Powerslide',
        description: 'Jeden z najbardziej stylowych i skutecznych sposobów na awaryjne zatrzymanie się z dużej prędkości. Polega na gwałtownym obróceniu jednej nogi prostopadle do kierunku jazdy, tworząc kontrolowany poślizg. Opanowanie go daje ogromną pewność siebie.',
        difficulty: 'advanced', category: 'slides', video: 'https://www.youtube.com/watch?v=NgOj7xVD0u4',
        prerequisites: ['powerstop'],
        keyPoints: ['Zacznij od szerokiego łuku, aby przygotować ciało do obrotu.', 'Zejdź BARDZO nisko na nodze podporowej – to absolutny klucz do sukcesu.', 'Noga ślizgająca powinna być niemal prostopadła do kierunku jazdy.', 'Większość wagi (ok. 80%) spoczywa na nodze podporowej, nie na ślizgającej.'],
        commonMistakes: ['Niewystarczające zejście nisko (najczęstszy błąd).', 'Przenoszenie zbyt dużej wagi na nogę ślizgającą.', 'Odchylanie się do tyłu zamiast utrzymywania środka ciężkości nad nogą podporową.', 'Zbyt mała prędkość początkowa, aby zainicjować ślizg.']
    },
    {
        id: 'backslide', name: 'Backslide',
        description: 'Klasyczny slajd wykonywany podczas jazdy tyłem. Jedna noga ślizga się prostopadle, podobnie jak w powerslidzie, ale cała akcja odbywa się w przeciwnym kierunku. Wymaga dużej świadomości przestrzennej i kontroli.',
        difficulty: 'advanced', category: 'slides', video: 'https://www.youtube.com/watch?v=NgOj7xVD0u4',
        prerequisites: ['powerslide', 'bwd-skating'],
        keyPoints: ['Rozpocznij od jazdy tyłem z umiarkowaną prędkością.', 'Obróć biodra i nogę ślizgającą o 90 stopni, podobnie jak w powerslidzie.', 'Zejdź bardzo nisko na nodze podporowej.', 'Patrz przez ramię w kierunku, w którym chcesz się zatrzymać.'],
        commonMistakes: ['Brak wystarczającej prędkości do zainicjowania ślizgu.', 'Nie patrzenie za siebie.', 'Przenoszenie zbyt dużej wagi na nogę ślizgającą.', 'Zbyt wysoka pozycja.'],
    },
    {
        id: 'parallel-slide', name: 'Parallel Slide',
        description: 'Bardzo efektowny i technicznie zaawansowany ślizg, w którym obie stopy ślizgają się równolegle do siebie po wykonaniu błyskawicznego obrotu o 180 stopni. Wymaga doskonałej równowagi, precyzyjnej kontroli krawędzi i dużej odwagi.',
        difficulty: 'expert', category: 'slides', video: 'https://www.youtube.com/watch?v=4EbONn3XMxI',
        prerequisites: ['powerslide', 'jump-180'],
        keyPoints: ['Zainicjuj ruch dynamicznym skrętem o 180 stopni (z lekkim podskokiem), jakbyś chciał przejść do jazdy tyłem.', 'W momencie obrotu, przenieś ciężar ciała na przednią część stóp.', 'Trzymaj stopy blisko siebie, równolegle, z lekkim naciskiem na wewnętrzne krawędzie.', 'Utrzymuj bardzo niską pozycję z rękami wyciągniętymi do przodu dla balansu.'],
        commonMistakes: ['Nieprzenoszenie wagi wystarczająco do przodu (powoduje upadek na plecy).', 'Rozjeżdżanie się stóp w trakcie ślizgu.', 'Prostowanie nóg, co prowadzi do utraty kontroli.', 'Strach przed pełnym, dynamicznym obrotem o 180 stopni.']
    },
    {
        id: 'soul-slide', name: 'Soul Slide',
        description: 'Stylowy, nisko położony slajd, w którym jedna noga ślizga się na wewnętrznej krawędzi szyny (soul plate), a druga noga prowadzi i stabilizuje. Pochodzi z jazdy agresywnej, ale jest popularny w urban skatingu.',
        difficulty: 'advanced', category: 'slides', video: 'https://www.youtube.com/watch?v=eLVeXq68bJ0',
        prerequisites: ['powerslide'],
        keyPoints: ['Zejdź bardzo nisko, niemal do siadu, na nodze prowadzącej.', 'Nogę ślizgającą ustaw prostopadle do kierunku jazdy, opierając ją na "duszy" (soul plate) i wewnętrznej krawędzi kół.', 'Przenieś większość ciężaru na nogę prowadzącą.', 'Użyj rąk do balansu, dotykając ziemi, jeśli to konieczne.'],
        commonMistakes: ['Zbyt wysoka pozycja.', 'Przenoszenie za dużo wagi na nogę ślizgającą.', 'Brak prostopadłego ustawienia nogi ślizgającej.', 'Strach przed niskim zejściem.'],
    },
    {
        id: 'acid-slide', name: 'Acid Slide',
        description: 'Zaawansowany i techniczny slajd, w którym tylna noga ślizga się na zewnętrznej krawędzi, podczas gdy przednia noga jest skrzyżowana z przodu. Wygląda bardzo efektownie i wymaga doskonałej kontroli krawędzi.',
        difficulty: 'expert', category: 'slides', video: 'https://www.youtube.com/watch?v=1H7IcDdb8rM',
        prerequisites: ['soul-slide'],
        keyPoints: ['Zainicjuj skręt, aby ustawić się bokiem do kierunku jazdy.', 'Skrzyżuj nogę prowadzącą z przodu.', 'Tylną nogę, która będzie się ślizgać, pochyl mocno na zewnętrzną krawędź.', 'Zejdź nisko i użyj rąk do utrzymania równowagi.'],
        commonMistakes: ['Niewystarczające pochylenie rolki na zewnętrzną krawędź.', 'Brak płynnego wejścia w pozycję z krzyżowaniem nogi.', 'Zbyt duża prędkość na początku nauki.'],
    },
    {
        id: 'magic-slide', name: 'Magic Slide',
        description: 'Spektakularny, niski slajd, w którym rolkarz balansuje na wewnętrznej krawędzi jednej rolki, podczas gdy druga noga jest wyprostowana. To bardzo stylowy sposób na zatrzymanie się, wymagający dużej elastyczności i siły.',
        difficulty: 'expert', category: 'slides', video: 'https://www.youtube.com/watch?v=nvhjiJa4HA0',
        prerequisites: ['powerslide', 'soul-slide'],
        keyPoints: ['Zejdź ekstremalnie nisko, niemal siadając na pięcie nogi podporowej.', 'Noga ślizgająca jest prawie płasko, używając wewnętrznej krawędzi kół i płozy.', 'Użyj rąk na ziemi do utrzymania balansu, zwłaszcza na początku.', 'Zainicjuj ruch z szerokiego łuku, aby ustawić ciało bokiem.'],
        commonMistakes: ['Niewystarczające zejście nisko.', 'Przenoszenie zbyt dużej wagi na nogę ślizgającą.', 'Próba wykonania bez wystarczającej prędkości.', 'Ciało skierowane do przodu zamiast bokiem.'],
    },
    
    // --- JUMPS & GRABS ---
    {
        id: 'basic-jump', name: 'Podstawowy skok',
        description: 'Fundament wszystkich ewolucji w powietrzu. Uczy dynamicznego wybicia z obu nóg, kontroli ciała w locie i, co najważniejsze, bezpiecznego i zamortyzowanego lądowania. To brama do pokonywania przeszkód i bardziej zaawansowanych trików.',
        difficulty: 'beginner', category: 'jumps', video: 'https://www.youtube.com/watch?v=7B88-EhSYLI',
        prerequisites: [],
        keyPoints: ['Zawsze uginaj kolana przed wybiciem i podczas lądowania (amortyzacja).', 'Wybijaj się z obu nóg jednocześnie, używając rąk do zamachu.', 'W powietrzu podciągnij kolana w kierunku klatki piersiowej, aby zwiększyć wysokość.', 'Ląduj na środkowej części rolki, nigdy na piętach lub palcach.'],
        commonMistakes: ['Lądowanie na prostych nogach (bardzo niebezpieczne dla stawów).', 'Brak amortyzacji po lądowaniu (tzw. "twarde lądowanie").', 'Lądowanie na piętach lub palcach, co prowadzi do utraty równowagi.', 'Brak użycia rąk do wygenerowania pędu w górę.']
    },
    {
        id: 'power-jump', name: 'Powerjump / Skok przez przeszkodę',
        description: 'Skok nastawiony na pokonanie dystansu lub przeszkody, a nie na wysokość. Kluczowa jest technika wybicia i lądowania, aby zachować pęd i stabilność. Niezbędna umiejętność w jeździe miejskiej (urban skating).',
        difficulty: 'intermediate', category: 'jumps', video: 'https://www.youtube.com/watch?v=7B88-EhSYLI',
        prerequisites: ['basic-jump'],
        keyPoints: ['Niska pozycja przed skokiem, aby zmaksymalizować siłę wybicia.', 'Wybijaj się do przodu, a nie tylko w górę. Użyj rąk do zamachu w przód.', 'W locie podciągnij nogi pod siebie, aby "skrócić" ciało i bezpiecznie ominąć przeszkodę.', 'Ląduj w pozycji "nożyc" (jedna noga lekko z przodu) dla maksymalnej stabilności.'],
        commonMistakes: ['Skakanie w górę zamiast w dal.', 'Lądowanie na prostych nogach lub ze złączonymi stopami.', 'Brak użycia rąk do wygenerowania pędu.', 'Zbyt wczesne lub zbyt późne wybicie.'],
    },
    {
        id: 'shifty-jump', name: 'Shifty Jump',
        description: 'Stylowy skok, w którym w powietrzu wykonujesz szybki obrót górnej części ciała o 90 stopni i wracasz do pierwotnej pozycji przed lądowaniem. To świetny sposób na dodanie stylu do skoków bez konieczności pełnej rotacji 180.',
        difficulty: 'intermediate', category: 'jumps', video: '',
        prerequisites: ['basic-jump'],
        keyPoints: ['Podczas skoku, energicznie obróć biodra i ramiona w jedną stronę.', 'Nogi podążają za biodrami, tworząc efekt "przesunięcia" (shift).', 'Przed lądowaniem, energicznie wróć do pozycji wyjściowej.', 'Trzymaj nogi podciągnięte pod siebie w trakcie rotacji.'],
        commonMistakes: ['Zbyt wolna rotacja, co uniemożliwia powrót na czas.', 'Brak inicjacji ruchu z bioder.', 'Lądowanie wciąż w pozycji obróconej.', 'Zbyt mała wysokość skoku.']
    },
    {
        id: 'jump-180', name: 'Skok 180',
        description: 'Skok z obrotem o 180 stopni, pozwalający na płynne przejście z jazdy przodem do jazdy tyłem (i odwrotnie). To pierwszy i najważniejszy krok do opanowania rotacji w powietrzu, kluczowy do łączenia trików w płynne sekwencje.',
        difficulty: 'intermediate', category: 'jumps', video: 'https://www.youtube.com/watch?v=qaZQxruQVWo',
        prerequisites: ['basic-jump', 'bwd-skating'],
        keyPoints: ['Zainicjuj rotację ramionami i głową tuż przed wybiciem (pre-rotacja).', 'Patrz w kierunku, w którym chcesz się obrócić – tam gdzie patrzy głowa, podąża ciało.', 'Wyląduj na obu nogach jednocześnie, wciąż patrząc przez ramię.', 'Ląduj w niskiej pozycji, aby utrzymać stabilność po zmianie kierunku.'],
        commonMistakes: ['Nie rozpoczynanie rotacji przed skokiem (rotacja w powietrzu jest bardzo trudna).', 'Lądowanie ze stopami w różnym czasie.', 'Zatrzymywanie rotacji w połowie drogi i panika.', 'Zbyt słabe wybicie.']
    },
    {
        id: 'alley-oop-180', name: 'Alley-oop 180',
        description: 'Zaawansowana wersja skoku 180, gdzie obrót wykonuje się w "trudniejszą" stronę, w kierunku zewnętrznym zakrętu lub w stronę przeszkody. Jest to nienaturalne, ale wygląda bardzo stylowo i jest używane do kreatywnego pokonywania przeszkód.',
        difficulty: 'advanced', category: 'jumps', video: '',
        prerequisites: ['jump-180'],
        keyPoints: ['Podjeżdżając do przeszkody łukiem, obracasz się w kierunku zewnętrznym, a nie wewnętrznym.', 'Wymaga silniejszej i bardziej świadomej pre-rotacji głowy i ramion.', 'Skup wzrok na miejscu lądowania przez całą rotację.', 'Ląduj stabilnie, gotowy do dalszej jazdy.'],
        commonMistakes: ['Instynktowne obracanie się w "łatwiejszą" stronę.', 'Brak wystarczającej rotacji i lądowanie bokiem.', 'Utrata orientacji przestrzennej w powietrzu.'],
    },
    {
        id: 'jump-360', name: 'Skok 360',
        description: 'Skok z pełnym obrotem o 360 stopni. To imponujący trik, który jest kamieniem milowym w nauce rotacji w powietrzu. Wymaga dobrego wybicia, szybkiej rotacji i umiejętności wylądowania tyłem, a następnie dokończenia obrotu na ziemi lub wylądowania od razu przodem.',
        difficulty: 'advanced', category: 'jumps', video: '',
        prerequisites: ['jump-180'],
        keyPoints: ['Zainicjuj mocną pre-rotację ramionami i biodrami jeszcze przed wybiciem.', 'Wybij się mocno w górę, nie w bok.', 'Trzymaj ręce i nogi blisko osi ciała w powietrzu, aby przyspieszyć rotację.', 'Skup wzrok na punkcie, do którego chcesz wrócić po obrocie.'],
        commonMistakes: ['Zbyt słaba pre-rotacja.', 'Próba rotacji dopiero w powietrzu.', 'Rozkładanie rąk i nóg, co spowalnia obrót.', 'Lądowanie na prostych nogach.']
    },
    {
        id: 'stair-ride', name: 'Zjazd ze schodów (Stair Ride/Bash)',
        description: 'Kluczowa umiejętność w jeździe miejskiej (urban skating), która buduje ogromną pewność siebie. Polega na kontrolowanym zjeździe w dół po schodach, utrzymując odpowiednią pozycję i amortyzując wstrząsy.',
        difficulty: 'advanced', category: 'jumps', video: '',
        prerequisites: ['basic-jump', 'lunge-turn'],
        keyPoints: ['Znajdź niskie schody z 2-3 stopniami na początek.', 'Ustaw stopy w pozycji "nożyc" (jedna z przodu, druga z tyłu) dla maksymalnej stabilności.', 'Utrzymuj bardzo niską pozycję, zginając mocno kolana.', 'Przenieś większość ciężaru na tylną nogę.'],
        commonMistakes: ['Jazda ze złączonymi stopami (bardzo niestabilne).', 'Prostowanie nóg i usztywnianie ciała ze strachu.', 'Przenoszenie ciężaru na przednią nogę, co prowadzi do upadku do przodu.', 'Zbyt duża prędkość na początek.']
    },
    {
        id: 'safety-grab', name: 'Safety Grab',
        description: 'Jeden z najprostszych i najbardziej fundamentalnych grabów (chwytów). Polega na złapaniu rolki tą samą ręką (prawa ręka łapie prawą rolkę) między nogami w trakcie skoku. Uczy kontroli w locie i dodaje stylu Twoim skokom.',
        difficulty: 'intermediate', category: 'jumps', video: '',
        prerequisites: ['basic-jump'],
        keyPoints: ['Podciągnij kolana wysoko do klatki piersiowej – to rolka ma przyjść do ręki, a nie odwrotnie.', 'Sięgnij ręką w dół, aby złapać za szynę lub but.', 'Trzymaj grab przez szczytowy moment skoku.', 'Puść rolkę przed lądowaniem, aby przygotować się do bezpiecznej amortyzacji.'],
        commonMistakes: ['Schylanie się do rolki zamiast podciągania jej do siebie.', 'Zbyt wczesne puszczenie rolki.', 'Utrata równowagi przez nadmierne skupienie się na chwycie zamiast na locie.', 'Grabowanie za koła zamiast za szynę.']
    },
    {
        id: 'mute-grab', name: 'Mute Grab',
        description: 'Klasyczny i stylowy grab, w którym przednia ręka łapie za przednią rolkę po stronie palców (toe side) w trakcie skoku. To świetny sposób na dodanie stylu i kontroli do swoich skoków.',
        difficulty: 'intermediate', category: 'jumps', video: '',
        prerequisites: ['basic-jump', 'safety-grab'],
        keyPoints: ['Podciągnij kolana wysoko do klatki piersiowej.', 'Sięgnij przednią ręką (np. lewa ręka, jeśli lewa noga jest z przodu) i złap za but lub szynę od strony zewnętrznej.', 'Staraj się wyprostować "tylną" nogę dla lepszego stylu.', 'Skup się na stabilnym lądowaniu po puszczeniu grabu.'],
        commonMistakes: ['Garbienie się i schylanie do rolki, zamiast podciągania jej do siebie.', 'Utrata równowagi w powietrzu.', 'Złapanie za rolkę na zbyt krótko.'],
    },
    {
        id: 'stalefish-grab', name: 'Stalefish Grab',
        description: 'Odwrotność Mute Grab. Tylna ręka sięga za plecami i łapie tylną rolkę od strony pięty (heel side). To klasyczny grab ze świata skateboardingu i snowboardingu, który wygląda bardzo stylowo.',
        difficulty: 'advanced', category: 'jumps', video: '',
        prerequisites: ['basic-jump', 'safety-grab'],
        keyPoints: ['Podciągnij nogi za siebie, zginając kolana.', 'Sięgnij tylną ręką za plecy i chwyć zewnętrzną krawędź buta lub płozy.', 'Wypchnij biodra lekko do przodu, aby ułatwić chwyt.', 'Trzymaj grab przez szczytowy moment lotu.'],
        commonMistakes: ['Próba chwytu bez wystarczającego podciągnięcia nóg.', 'Garbienie się.', 'Utrata równowagi przez sięganie zbyt daleko.', 'Puszczanie grabu zbyt wcześnie.'],
    },
    {
        id: 'rocket-grab', name: 'Rocket Grab',
        description: 'Efektowny grab, w którym w powietrzu chwytasz obiema rękami za czubki obu rolek i prostujesz nogi do przodu. Trik ten wymaga dobrej elastyczności i siły core.',
        difficulty: 'advanced', category: 'jumps', video: '',
        prerequisites: ['basic-jump'],
        keyPoints: ['Wybij się mocno i od razu podciągnij kolana do klatki piersiowej.', 'Chwyć obiema rękami za czubki butów.', 'Wyprostuj nogi do przodu, trzymając grab.', 'Przed lądowaniem, zegnij nogi i puść rolki.'],
        commonMistakes: ['Brak wystarczającej wysokości skoku.', 'Zbyt wolne chwytanie rolek.', 'Trudności z wyprostowaniem nóg z powodu braku elastyczności.', 'Utrata równowagi w powietrzu.'],
    },
    
    // --- SPINS ---
    {
        id: 'two-foot-spin', name: 'Obrót na dwóch nogach',
        description: 'Podstawowy obrót wykonywany w miejscu na obu nogach. Uczy kontroli nad siłą odśrodkową i utrzymywania równowagi podczas kręcenia się. Jest to fundament, który przygotuje Cię do bardziej skomplikowanych i stylowych spinów na jednej nodze.',
        difficulty: 'intermediate', category: 'spins', video: '',
        prerequisites: ['a-frame-turn'],
        keyPoints: ['Rozpocznij od lekkiego najazdu po łuku, aby zainicjować rotację.', 'Złącz ręce i przyciągnij je do osi ciała, aby przyspieszyć obrót.', 'Utrzymuj ciężar ciała na przednich kołach (rocker na palce).', 'Rozłożenie rąk na boki spowolni obrót i pozwoli go kontrolowanie zakończyć.'],
        commonMistakes: ['Przenoszenie ciężaru na pięty, co powoduje utratę kontroli.', 'Zbyt szybkie i gwałtowne rozpoczynanie obrotu.', 'Pochylanie się do przodu lub do tyłu zamiast utrzymywania pionowej postawy.', 'Zbyt szerokie rozstawienie nóg.']
    },
    {
        id: 'one-foot-spin', name: 'Obrót na jednej nodze',
        description: 'Klasyczny i elegancki obrót wykonywany na jednej nodze. Wymaga znacznie lepszej równowagi i kontroli niż obrót na dwóch nogach. Jest to kluczowy element w jeździe figurowej, slalomie i dodaje finezji do każdego przejazdu.',
        difficulty: 'advanced', category: 'spins', video: '',
        prerequisites: ['two-foot-spin', 'one-foot-balance'],
        keyPoints: ['Wejdź w obrót z jazdy tyłem na jednej nodze dla lepszej kontroli.', 'Skup się na utrzymaniu balansu na przednim kole (toe-press).', 'Użyj wolnej nogi i ramion do kontrolowania prędkości obrotu (złożone = szybciej, rozłożone = wolniej).', 'Trzymaj mocno napięty core i wyprostowaną sylwetkę.'],
        commonMistakes: ['Próba wykonania bez opanowania obrotu na dwóch nogach.', 'Przenoszenie ciężaru na tył rolki.', 'Zbyt gwałtowne ruchy ramion i wolnej nogi, które wytrącają z równowagi.', 'Zadzieranie głowy do góry.']
    },
    {
        id: 'toe-toe-spin', name: 'Toe-Toe Spin',
        description: 'Obrót na dwóch nogach, ale wykonywany z balansem na przednich kołach obu rolek. Jest to krok w stronę zaawansowanych obrotów na jednym kole i wymaga precyzyjnej kontroli balansu.',
        difficulty: 'advanced', category: 'spins', video: '',
        prerequisites: ['two-foot-spin'],
        keyPoints: ['Przenieś ciężar ciała na przednią część stóp.', 'Utrzymuj stopy blisko siebie.', 'Zainicjuj rotację z łuku i użyj ramion do kontroli prędkości.', 'Utrzymuj wyprostowaną postawę.'],
        commonMistakes: ['Przenoszenie ciężaru na całe stopy lub pięty.', 'Zbyt szerokie rozstawienie nóg.', 'Utrata równowagi przez pochylanie się.'],
    },
    {
        id: 'heel-heel-spin', name: 'Heel-Heel Spin',
        description: 'Odmiana obrotu na dwóch nogach, wykonywana z balansem na tylnych kołach obu rolek. Jest to trudniejsza wersja, która stanowi dobre ćwiczenie do nauki balansu na piętach.',
        difficulty: 'advanced', category: 'spins', video: '',
        prerequisites: ['two-foot-spin'],
        keyPoints: ['Przenieś ciężar ciała na tylną część stóp.', 'Lekko unieś palce, aby upewnić się, że obracasz się na tylnych kołach.', 'Utrzymuj ciało w pionowej osi.', 'Użyj rąk do kontroli prędkości i balansu.'],
        commonMistakes: ['Zbytnie odchylanie się do tyłu.', 'Obracanie się na całych stopach.', 'Zbyt duża prędkość na początku.'],
    },
    {
        id: 'sit-spin', name: 'Sit Spin',
        description: 'Ikoniczny obrót z jazdy figurowej, zaadaptowany na rolki. Rolkarz obraca się na jednej nodze w bardzo niskiej pozycji "siedzącej", z wolną nogą wyprostowaną do przodu. Wymaga ogromnej siły, równowagi i kontroli.',
        difficulty: 'expert', category: 'spins', video: 'https://www.youtube.com/watch?v=JODov8u1gjY',
        prerequisites: ['one-foot-spin'],
        keyPoints: ['Wejdź w obrót z jazdy tyłem na jednej nodze, na głębokiej zewnętrznej krawędzi.', 'Szybko obniż biodra w dół i do tyłu, jakbyś siadał na krześle.', 'Wyprostuj wolną nogę do przodu i napnij mocno core.', 'Użyj ramion do kontroli prędkości obrotu (złożone = szybciej, rozłożone = wolniej).'],
        commonMistakes: ['Obracanie się na płaskiej krawędzi zamiast na głębokiej wewnętrznej.', 'Niewystarczające obniżenie pozycji.', 'Upuszczanie wolnej nogi.', 'Utrata równowagi przez pochylenie się do przodu lub do tyłu.'],
    },

    // --- MANUALS ---
    {
        id: 'heel-manual', name: 'Heel Manual (jazda na 2 tylnych kółkach)',
        description: 'Stylowy trik polegający na jeździe z balansem na dwóch tylnych kółkach. To ostateczny test równowagi i precyzyjnej kontroli. Opanowanie go pozwala na płynne łączenie trików i dodaje finezji Twojej jeździe.',
        difficulty: 'intermediate', category: 'manuals', video: 'https://www.youtube.com/watch?v=gx0pba1Q7js',
        prerequisites: ['one-foot-balance'],
        keyPoints: ['Przenieś ciężar ciała lekko do tyłu, ale trzymaj klatkę piersiową nad rolkami.', 'Użyj wolnej nogi i rąk jako przeciwwagi do utrzymania balansu.', 'Kontroluj wysokość uniesienia przednich kółek mikroruchami w kostce i biodrach.', 'Zacznij od krótkich prób, stopniowo wydłużając dystans.'],
        commonMistakes: ['Zbytnie odchylanie się do tyłu, co prowadzi do upadku.', 'Usztywnianie nogi, na której jedziesz, zamiast aktywnego balansowania.', 'Patrzenie na stopy zamiast przed siebie.', 'Zbyt gwałtowne wchodzenie w pozycję.']
    },
    {
        id: 'toe-manual', name: 'Toe Manual (jazda na 2 przednich kółkach)',
        description: 'Znacznie trudniejszy wariant manuala, polegający na balansowaniu na dwóch przednich kołach. Wymaga dużej siły mięśni piszczelowych, precyzji w przenoszeniu ciężaru ciała i absolutnie doskonałej kontroli.',
        difficulty: 'advanced', category: 'manuals', video: 'https://www.youtube.com/watch?v=gx0pba1Q7js',
        prerequisites: ['heel-manual'],
        keyPoints: ['Przenieś ciężar ciała mocno do przodu, ale utrzymuj biodra nisko.', 'Użyj rąk i wolnej nogi wyciągniętej do tyłu do balansu.', 'Napnij mięśnie piszczelowe, aby utrzymać pozycję i nie upaść do przodu.', 'Ćwicz na idealnie gładkiej powierzchni, początkowo z bardzo małą prędkością.'],
        commonMistakes: ['Zbyt gwałtowne przeniesienie ciężaru.', 'Brak użycia rąk do stabilizacji.', 'Nieutrzymywanie wystarczająco niskiej pozycji.', 'Zbyt duża prędkość na początku nauki.']
    },
    {
        id: 'one-foot-heel-manual', name: 'One-Foot Heel Manual',
        description: 'Ekspercka wersja manuala, w której balansujesz na tylnych kołach tylko jednej rolki. Ten trik wymaga absolutnej precyzji, siły w kostce i doskonałego zmysłu równowagi.',
        difficulty: 'expert', category: 'manuals', video: '',
        prerequisites: ['heel-manual'],
        keyPoints: ['Opanuj perfekcyjnie Heel Manual na dwóch nogach.', 'Przenieś cały ciężar na jedną nogę i znajdź punkt balansu na jej tylnych kołach.', 'Użyj wolnej nogi i rąk bardzo aktywnie do utrzymania równowagi.', 'Zacznij od podnoszenia drugiej nogi tylko na ułamek sekundy.'],
        commonMistakes: ['Próba wykonania bez solidnych podstaw.', 'Zbyt gwałtowne ruchy.', 'Brak cierpliwości – ten trik wymaga setek prób.', 'Usztywnianie ciała.'],
    },
    {
        id: 'one-foot-toe-manual', name: 'One-Foot Toe Manual',
        description: 'Święty Graal manuali. Balansowanie na przednich kołach jednej rolki to jeden z najtrudniejszych testów równowagi i kontroli na rolkach. Wykonanie tego triku świadczy o mistrzowskim opanowaniu sprzętu.',
        difficulty: 'expert', category: 'manuals', video: '',
        prerequisites: ['toe-manual', 'one-foot-heel-manual'],
        keyPoints: ['Perfekcyjne opanowanie Toe Manuala na dwóch nogach jest absolutnie konieczne.', 'Przenieś ciężar do przodu na jedną nogę.', 'Użyj wolnej nogi i rąk jako przeciwwagi.', 'Wymaga ogromnej siły w mięśniach piszczelowych i core.'],
        commonMistakes: ['Wszelkie błędy z Toe Manuala, ale spotęgowane.', 'Nawet najmniejszy błąd w balansie kończy się upadkiem.', 'Zbyt mała prędkość.'],
    },
    
    // --- WIZARD SKATING ---
    {
        id: 'snake', name: 'Snake (wężyk)',
        description: 'Hipnotyzujący i płynny ruch, w którym rolkarz wykonuje naprzemienne, ciasne skręty, jadąc na jednej nodze. Tworzy ścieżkę w kształcie litery S i jest esencją kontroli krawędzi oraz fundamentem stylu Wizard Skating.',
        difficulty: 'intermediate', category: 'wizard', video: 'https://www.youtube.com/watch?v=dyn8Czq9ffk',
        prerequisites: ['one-foot-balance', 'a-frame-turn'],
        keyPoints: ['Ruch wychodzi z kostki i bioder, a nie z machania ramionami.', 'Utrzymuj stały rytm i płynność, jakbyś płynął po asfalcie.', 'Aktywnie przenoś ciężar z wewnętrznej na zewnętrzną krawędź rolki.', 'Wolna noga jest zrelaksowana i pomaga w balansie.'],
        commonMistakes: ['Skręcanie tylko górną częścią ciała.', 'Zbyt duży lub zbyt mały promień skrętu.', 'Brak rytmu i płynności.'],
        gearTips: 'Znacznie łatwiejsze do wykonania na szynie z rockerem (np. 5-kołowej lub typu "banana").'
    },
    {
        id: 'toe-press-turns', name: 'Toe Press Turns',
        description: 'Fundamentalny ruch Wizard Skating polegający na wykonywaniu bardzo ciasnych skrętów z mocnym naciskiem na przednie koła. Uczy głębokiej kontroli krawędzi i jest podstawą do bardziej złożonych pivotów i przejść.',
        difficulty: 'advanced', category: 'wizard', video: '',
        prerequisites: ['snake', 'parallel-turn'],
        keyPoints: ['Przenieś ciężar ciała na przednią część rolki.', 'Mocno zegnij kostkę, aby zainicjować skręt na krawędzi.', 'Utrzymuj niską pozycję i używaj bioder do prowadzenia skrętu.', 'Ćwicz płynne przechodzenie z jednego skrętu w drugi.'],
        commonMistakes: ['Skręcanie na płaskiej rolce.', 'Zbyt wysoka pozycja.', 'Brak zaangażowania kostki i bioder.'],
        gearTips: 'Szyna z rockerem jest wysoce rekomendowana.'
    },
    {
        id: 'grapevine', name: 'Krok winorośli (Grapevine)',
        description: 'Wyglądający jak taniec na rolkach, stylowy ruch polegający na płynnym krzyżowaniu nóg z przodu i z tyłu bez odrywania ich od ziemi. To fundament wielu kreatywnych i płynnych sekwencji w stylu wizard.',
        difficulty: 'advanced', category: 'wizard', video: '',
        prerequisites: ['fwd-crossover', 'mohawk-transition'],
        keyPoints: ['Utrzymuj nogi i rolki blisko siebie.', 'Skup się na głębokiej rotacji bioder – to one prowadzą ruch.', 'Ruch powinien być ciągły i płynny, bez zatrzymywania się.', 'Zacznij bardzo powoli, aby mózg nauczył się prawidłowej sekwencji kroków.'],
        commonMistakes: ['Zbyt szerokie rozstawianie nóg.', 'Brak rotacji w biodrach i próba ruchu tylko nogami.', 'Zatrzymywanie się po każdym skrzyżowaniu.']
    },
    {
        id: 'volte-pivot', name: 'Volte (Pivot)',
        description: 'Kluczowy ruch w Wizard Skating, pozwalający na błyskawiczną zmianę kierunku o 180 stopni z niezwykłą płynnością. Polega na szybkim obrocie (piwocie) na przednim lub tylnym kole, podczas gdy druga noga wykonuje zamach. Otwiera to drzwi do nieskończonych kombinacji.',
        difficulty: 'advanced', category: 'wizard', video: '',
        prerequisites: ['one-foot-balance', 'bwd-skating'],
        keyPoints: ['Obrót odbywa się na jednej nodze, na jednym lub dwóch kołach.', 'Inicjuj ruch odwróceniem głowy i ramion.', 'Użyj zamachu wolną nogą, aby nadać pęd rotacji.', 'Ćwicz zarówno pivot na przednim, jak i tylnym kole.'],
        commonMistakes: ['Próba obrotu na wszystkich czterech kołach.', 'Brak inicjacji ruchu górną częścią ciała.', 'Zbyt mała prędkość wejściowa.'],
        gearTips: 'Niemal niezbędna jest szyna z rockerem.'
    },
    {
        id: 'pivoting-grapevine', name: 'Pivoting Grapevine',
        description: 'Dynamiczna i zaawansowana wersja kroku winorośli, która włącza pivoty o 180 stopni. Pozwala to na znacznie bardziej złożone i płynne kombinacje, łącząc krzyżowanie nóg z szybkimi zmianami kierunku.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['grapevine', 'volte-pivot'],
        keyPoints: ['Połącz sekwencję grapevine z pivotem na przednim lub tylnym kole.', 'Kluczem jest płynne przejście z ruchu krzyżowanego do obrotu.', 'Użyj rotacji tułowia do zainicjowania pivotu.', 'Utrzymuj stały przepływ i rytm.'],
        commonMistakes: ['Zatrzymywanie się przed pivotem.', 'Zbyt wolny lub niezdecydowany obrót.', 'Utrata równowagi podczas przejścia.'],
        gearTips: 'Szyna z rockerem jest praktycznie niezbędna.'
    },
    {
        id: 'lion-cross', name: 'Lion Cross',
        description: 'Charakterystyczny dla Wizard Skatingu, niezwykle efektowny ruch. Polega na jeździe tyłem z jedną nogą skrzyżowaną z przodu, głęboko pochyloną na zewnętrzną krawędź. Wymaga ogromnej elastyczności, siły w kostkach i balansu, tworząc wrażenie płynięcia po asfalcie.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['bwd-crossover', 'snake'],
        keyPoints: ['Wymaga dużej elastyczności i siły w kostkach.', 'Noga krzyżująca jest mocno pochylona na zewnętrzną krawędź.', 'Zacznij od prób na stojąco, aby znaleźć pozycję.', 'Utrzymuj niską pozycję i używaj rąk do balansu.'],
        commonMistakes: ['Brak wystarczającego pochylenia rolki na krawędź.', 'Strach przed upadkiem, powodujący usztywnienie.', 'Zbyt wysoka pozycja.'],
        gearTips: 'Łatwiejsze na bardziej elastycznych butach i szynach z rockerem.'
    },
    {
        id: 'panther-cross', name: 'Panther Cross',
        description: 'Wariacja na temat Lion Cross. Podczas jazdy tyłem, tylna noga jest skrzyżowana za nogą prowadzącą, co tworzy inny, równie płynny i stylowy wygląd. Wymaga podobnych umiejętności co Lion Cross, ale innej koordynacji.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['lion-cross'],
        keyPoints: ['Zamiast krzyżować nogę z przodu, krzyżujesz ją z tyłu.', 'Wymaga głębokiego pochylenia na krawędziach obu rolek.', 'Utrzymuj niską pozycję i rotację w biodrach.', 'Ćwicz powoli, aby zrozumieć ułożenie ciała.'],
        commonMistakes: ['Mylenie z Lion Cross.', 'Brak wystarczającej głębokości i pochylenia na krawędziach.', 'Zbyt wysoka pozycja.'],
        gearTips: 'Szyna z rockerem jest bardzo pomocna.'
    },
    {
        id: 'gazelle', name: 'Gazelle',
        description: 'Piękny i niezwykle trudny trik łączący skok z balansem. Polega na wykonaniu skoku 180 i wylądowaniu bezpośrednio w manualu na jednej nodze, jadąc tyłem. Wymaga ogromnej precyzji, siły i doskonałej równowagi.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['jump-180', 'heel-manual', 'bwd-skating'],
        keyPoints: ['Przed skokiem przygotuj się mentalnie do lądowania na jednej nodze w manualu.', 'Wyląduj miękko na tylnych dwóch kółkach nogi prowadzącej.', 'Natychmiast po lądowaniu użyj wolnej nogi i rąk jako przeciwwagi, aby ustabilizować pozycję.', 'Patrz przez ramię w kierunku jazdy, aby utrzymać równowagę w manualu tyłem.'],
        commonMistakes: ['Lądowanie na całej stopie zamiast na tylnych kółkach.', 'Zbyt gwałtowne lądowanie, powodujące natychmiastową utratę równowagi.', 'Brak przygotowania do balansu tyłem przed wykonaniem skoku.']
    },
    {
        id: 'lion-x', name: 'Lion X-Cross',
        description: 'Ewolucja Lion Cross i ruch na absolutnie eksperckim poziomie. Podczas jazdy tyłem obie nogi są głęboko skrzyżowane. Wymaga ekstremalnej elastyczności, kontroli krawędzi i siły, będąc jednym z najbardziej imponujących wizualnie trików w świecie Wizard Skating.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['lion-cross'],
        keyPoints: ['Opanuj Lion Cross do perfekcji na obie strony.', 'Ruch polega na dodaniu drugiej skrzyżowanej nogi (z tyłu), co wymaga jeszcze większego pochylenia.', 'Wymaga bardzo głębokiej i stabilnej pozycji.', 'Ćwicz wejście do pozycji bardzo powoli, nawet na stojąco, aby ciało się przyzwyczaiło.'],
        commonMistakes: ['Próba wykonania bez solidnych podstaw.', 'Utrata równowagi z powodu niewystarczającego pochylenia na krawędziach.', 'Zbyt mała elastyczność w biodrach i kostkach.'],
        gearTips: 'Wykonanie tego triku jest prawie niemożliwe bez szyny z rockerem.'
    },
    {
        id: 'saberhagen', name: 'Saberhagen',
        description: 'Płynny i hipnotyzujący ruch z repertuaru Wizard Skating. Łączy w sobie pivot na jednej nodze z eleganckim, skrzyżowanym przejściem drugiej nogi, co pozwala na błyskawiczną i stylową zmianę kierunku.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['volte-pivot', 'grapevine'],
        keyPoints: ['Ruch jest inicjowany przez pivot na tylnym kole nogi podporowej.', 'Druga noga wykonuje płynny, okrężny ruch, przechodząc z przodu do tyłu.', 'Wymaga głębokiej pracy na krawędziach i dużej rotacji w biodrach.', 'Kluczem jest utrzymanie płynności i połączenie obu ruchów w jedną, ciągłą akcję.'],
        commonMistakes: ['Zatrzymywanie ruchu w połowie.', 'Zbyt mała rotacja bioder.', 'Próba wykonania ruchu na płaskich rolkach zamiast na krawędziach.', 'Zbyt wysoka pozycja.'],
        gearTips: 'Praktycznie wymaga szyny z rockerem do płynnego wykonania.'
    },
    {
        id: 'cosmic-latte', name: 'Cosmic Latte',
        description: 'Kolejny popisowy ruch Wizard Skating, który wygląda jak taniec na asfalcie. Jest to kombinacja obrotów, manuali i przejść na krawędziach, wykonywana z niezwykłą gracją. Polega na płynnym przejściu z jazdy przodem do tyłem przez pivot, często z elementem manuala.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['saberhagen', 'heel-manual'],
        keyPoints: ['Jest to sekwencja ruchów, a nie pojedynczy trik – kluczem jest łączenie elementów.', 'Często zaczyna się od wejścia na zewnętrzną krawędź, inicjując pivot.', 'Ruch jest bardzo "biodrowy" i wymaga dużej elastyczności.', 'Utrzymuj stały przepływ (flow) i nie zatrzymuj się między elementami.'],
        commonMistakes: ['Traktowanie tego jako listy ruchów do odhaczenia, a nie płynnej całości.', 'Brak wystarczającej prędkości do utrzymania pędu.', 'Usztywnianie ciała.'],
        gearTips: 'Szyna z rockerem (np. 5-kołowa) jest niemal niezbędna.'
    },
    // --- 50 NEW SKILLS START HERE ---

    // --- SLALOM (15) ---
    {
        id: 'slalom-fish', name: 'Slalom - Fish (Ryba)',
        description: 'Podstawowy ruch slalomowy do przodu na dwóch nogach, polegający na płynnym omijaniu pachołków. Doskonałe ćwiczenie na kontrolę krawędzi i rytm.',
        difficulty: 'beginner', category: 'slalom', video: 'https://www.youtube.com/watch?v=vVKPWNliUV4',
        prerequisites: ['fwd-swizzle'],
        keyPoints: ['Trzymaj stopy blisko siebie.', 'Przenoś ciężar ciała z jednej nogi na drugą, inicjując skręt biodrami.', 'Patrz na 2-3 pachołki do przodu, a nie pod nogi.', 'Ruch powinien być płynny i ciągły.'],
        commonMistakes: ['Zbyt szerokie rozstawienie nóg.', 'Usztywnianie bioder.', 'Brak rytmu.', 'Patrzenie na stopy.']
    },
    {
        id: 'slalom-snake-fwd', name: 'Slalom - Wężyk do Przodu (One Foot)',
        description: 'Klasyczny wężyk slalomowy wykonywany na jednej nodze. Jest to test równowagi i precyzyjnej kontroli krawędzi wewnętrznej i zewnętrznej.',
        difficulty: 'intermediate', category: 'slalom', video: 'https://www.youtube.com/watch?v=vVKPWNliUV4',
        prerequisites: ['one-foot-balance', 'slalom-fish'],
        keyPoints: ['Mocno ugnij nogę podporową.', 'Skręt inicjuj w kostce i biodrze.', 'Użyj wolnej nogi i rąk do utrzymania balansu.', 'Staraj się jechać jak najbliżej pachołków.'],
        commonMistakes: ['Prostowanie nogi podporowej.', 'Zbyt duże wychylenia tułowia.', 'Jazda zbyt daleko od pachołków.'],
        gearTips: 'Szyna z rockerem (banan) znacznie ułatwia wykonanie.'
    },
    {
        id: 'slalom-snake-bwd', name: 'Slalom - Wężyk do Tyłu (One Foot)',
        description: 'Wężyk na jednej nodze wykonywany podczas jazdy tyłem. Wymaga dużej świadomości przestrzennej i jeszcze lepszej kontroli nad krawędziami.',
        difficulty: 'advanced', category: 'slalom', video: 'https://www.youtube.com/watch?v=vVKPWNliUV4',
        prerequisites: ['bwd-one-foot', 'slalom-snake-fwd'],
        keyPoints: ['Regularnie patrz przez ramię.', 'Utrzymuj ciężar na przedniej części rolki.', 'Pracuj intensywnie kostką, aby kontrolować krawędzie.', 'Zacznij od wolnej prędkości.'],
        commonMistakes: ['Nieoglądanie się za siebie.', 'Przenoszenie ciężaru na pięty.', 'Utrata rytmu.'],
        gearTips: 'Szyna z rockerem jest wysoce rekomendowana.'
    },
    {
        id: 'slalom-cross-fwd', name: 'Slalom - Krzyżak do Przodu',
        description: 'Płynne omijanie pachołków z krzyżowaniem nóg z przodu i z tyłu. Wygląda bardzo stylowo i uczy zaawansowanej koordynacji.',
        difficulty: 'intermediate', category: 'slalom', video: 'https://www.youtube.com/watch?v=vVKPWNliUV4',
        prerequisites: ['fwd-crossover', 'slalom-fish'],
        keyPoints: ['Utrzymuj nogi blisko siebie.', 'Ruch krzyżowania powinien być płynny i rytmiczny.', 'Pracuj biodrami, aby zainicjować skręt.', 'Trzymaj niską pozycję.'],
        commonMistakes: ['Zbyt szerokie i powolne ruchy.', 'Utrata równowagi podczas krzyżowania.', 'Brak płynności.'],
    },
    {
        id: 'slalom-cross-bwd', name: 'Slalom - Krzyżak do Tyłu',
        description: 'Krzyżak wykonywany podczas jazdy tyłem. Jest to technicznie trudny ruch, który wymaga doskonałej równowagi i koordynacji.',
        difficulty: 'advanced', category: 'slalom', video: 'https://www.youtube.com/watch?v=vVKPWNliUV4',
        prerequisites: ['bwd-crossover', 'slalom-cross-fwd'],
        keyPoints: ['Stale patrz przez ramię.', 'Trzymaj nogi blisko siebie i wykonuj szybkie, precyzyjne ruchy.', 'Utrzymuj niską pozycję.', 'Zacznij bardzo powoli, aby opanować sekwencję ruchów.'],
        commonMistakes: ['Plątanie nóg.', 'Nie patrzenie za siebie.', 'Zbyt wysoka pozycja.'],
    },
    {
        id: 'slalom-crab', name: 'Slalom - Krab',
        description: 'Jazda bokiem przez pachołki, utrzymując nogi skrzyżowane. Wygląda bardzo nietypowo i jest świetnym ćwiczeniem na kontrolę krawędzi.',
        difficulty: 'intermediate', category: 'slalom', video: '',
        prerequisites: ['one-foot-balance'],
        keyPoints: ['Jedna noga jedzie przodem, druga tyłem.', 'Utrzymuj stałą pozycję skrzyżowaną.', 'Kontroluj ruch poprzez nacisk na krawędzie.', 'Patrz w kierunku jazdy.'],
        commonMistakes: ['Zbyt małe pochylenie na krawędzie.', 'Utrata pozycji skrzyżowanej.', 'Brak płynności.'],
    },
    {
        id: 'slalom-nelson', name: 'Slalom - Nelson',
        description: 'Jazda bokiem przez pachołki, gdzie jedna noga jest skrzyżowana z tyłu. To wariacja kraba, która wymaga innej koordynacji.',
        difficulty: 'advanced', category: 'slalom', video: '',
        prerequisites: ['slalom-crab'],
        keyPoints: ['Noga tylna jest skrzyżowana za nogą przednią.', 'Utrzymuj biodra nisko.', 'Patrz przez ramię w kierunku jazdy.', 'Precyzyjnie kontroluj krawędzie obu rolek.'],
        commonMistakes: ['Mylenie z krabem.', 'Utrata równowagi.', 'Jazda na płaskich rolkach.'],
    },
    {
        id: 'slalom-mabrouk', name: 'Slalom - Mabrouk',
        description: 'Efektowny obrót na jednym kole (na pachołku), podczas gdy druga noga wykonuje okrężny ruch. To jeden z pierwszych "obrotowych" trików w slalomie.',
        difficulty: 'advanced', category: 'slalom', video: '',
        prerequisites: ['one-foot-spin', 'slalom-snake-fwd'],
        keyPoints: ['Obrót wykonuje się na przednim kole (toe spin).', 'Zainicjuj rotację tułowiem.', 'Wolna noga rysuje koło wokół pachołka.', 'Utrzymuj wyprostowaną postawę.'],
        commonMistakes: ['Obracanie się na całej rolce.', 'Utrata równowagi.', 'Zbyt wolna rotacja.'],
        gearTips: 'Niemal niemożliwe bez szyny z rockerem.'
    },
    {
        id: 'slalom-volte', name: 'Slalom - Volte',
        description: 'Szybki, energiczny obrót o 360 stopni wokół pachołka. Jest to bardziej dynamiczna wersja Mabrouka, często używana do zmiany kierunku w sekwencji.',
        difficulty: 'advanced', category: 'slalom', video: '',
        prerequisites: ['slalom-mabrouk'],
        keyPoints: ['Bądź bardzo blisko pachołka.', 'Obrót jest szybki i ciasny.', 'Użyj ramion do zainicjowania i zatrzymania rotacji.', 'Ląduj stabilnie, gotowy do następnego ruchu.'],
        commonMistakes: ['Zbyt duży promień obrotu.', 'Utrata kontroli nad rotacją.', 'Niestabilne wyjście z obrotu.'],
    },
    {
        id: 'slalom-x-jump', name: 'Slalom - X-Jump',
        description: 'Skok nad pachołkiem z jednoczesnym skrzyżowaniem nóg w powietrzu w kształt litery X. To prosty, ale stylowy trik, który dodaje dynamiki do przejazdu.',
        difficulty: 'intermediate', category: 'slalom', video: '',
        prerequisites: ['basic-jump'],
        keyPoints: ['Wyskocz wystarczająco wysoko, aby ominąć pachołek.', 'W powietrzu skrzyżuj nogi.', 'Rozkrzyżuj nogi przed lądowaniem.', 'Ląduj miękko na obie nogi.'],
        commonMistakes: ['Potrącenie pachołka.', 'Lądowanie ze skrzyżowanymi nogami.', 'Zbyt niskie wybicie.'],
    },
    {
        id: 'slalom-heel-toe-snake', name: 'Slalom - Wężyk Heel-Toe',
        description: 'Wężyk wykonywany w pozycji heel-toe (jedna rolka na pięcie, druga na palcach). Wymaga doskonałej równowagi i kontroli.',
        difficulty: 'expert', category: 'slalom', video: '',
        prerequisites: ['heel-toe-rolls', 'slalom-snake-fwd'],
        keyPoints: ['Utrzymaj stabilną pozycję heel-toe.', 'Inicjuj skręt biodrami i kostkami.', 'Użyj rąk do balansu.', 'Skup wzrok daleko z przodu.'],
        commonMistakes: ['Utrata pozycji heel-toe.', 'Brak płynności.', 'Zbyt duże wychylenia tułowia.'],
    },
    {
        id: 'slalom-footgun', name: 'Slalom - Footgun',
        description: 'Jazda na jednej nodze, z drugą nogą wyprostowaną nisko nad ziemią, jakbyś "strzelał" z rolki. To stylowy ruch, który dobrze wygląda w kombinacjach.',
        difficulty: 'intermediate', category: 'slalom', video: '',
        prerequisites: ['one-foot-balance'],
        keyPoints: ['Zejdź nisko na nodze podporowej.', 'Wyprostuj drugą nogę do przodu, tuż nad ziemią.', 'Napnij mięśnie core dla stabilności.', 'Patrz przed siebie.'],
        commonMistakes: ['Dotykanie ziemi wyprostowaną nogą.', 'Zbyt wysoka pozycja.', 'Utrata równowagi.'],
    },
    {
        id: 'slalom-wiper', name: 'Slalom - Wycieraczka (Wiper)',
        description: 'Ruch, w którym wolna noga porusza się jak wycieraczka samochodowa, omijając pachołki. Jest to kreatywny sposób na urozmaicenie przejazdu.',
        difficulty: 'advanced', category: 'slalom', video: '',
        prerequisites: ['slalom-snake-fwd'],
        keyPoints: ['Noga podporowa wykonuje wężyka.', 'Wolna noga płynnie omija pachołki z jednej strony na drugą.', 'Wymaga dobrej koordynacji obu nóg.', 'Utrzymuj stały rytm.'],
        commonMistakes: ['Potrącanie pachołków wolną nogą.', 'Utrata rytmu.', 'Brak synchronizacji między nogami.'],
    },
    {
        id: 'slalom-crazy-sun', name: 'Slalom - Crazy Sun',
        description: 'Zaawansowany ruch, w którym jedna noga wykonuje pełny obrót (koło) wokół pachołka, podczas gdy druga omija go w linii prostej. Wymaga dużej elastyczności i kontroli.',
        difficulty: 'expert', category: 'slalom', video: '',
        prerequisites: ['slalom-snake-fwd', 'slalom-mabrouk'],
        keyPoints: ['Jedna noga jedzie prosto wzdłuż linii pachołków.', 'Druga noga wykonuje pełne koło wokół każdego pachołka.', 'Wymaga dużej rotacji w biodrach.', 'Trzymaj tułów stabilnie.'],
        commonMistakes: ['Niewykonanie pełnego koła.', 'Potrącanie pachołków.', 'Utrata równowagi.'],
    },
    {
        id: 'slalom-italian', name: 'Slalom - Włoski (Italian)',
        description: 'Połączenie krzyżaka do tyłu z obrotem na jednej nodze. To bardzo techniczny i elegancki ruch, często używany w zaawansowanych kombinacjach.',
        difficulty: 'expert', category: 'slalom', video: '',
        prerequisites: ['slalom-cross-bwd', 'one-foot-spin'],
        keyPoints: ['Wykonaj krzyżak do tyłu.', 'Przy pachołku, wykonaj szybki obrót na nodze zewnętrznej.', 'Płynnie przejdź z powrotem do krzyżaka.', 'Wymaga doskonałego wyczucia czasu i rytmu.'],
        commonMistakes: ['Niestabilny obrót.', 'Utrata rytmu po obrocie.', 'Brak płynnego połączenia ruchów.'],
    },
    
    // --- SLIDES (7 new) ---
    {
        id: 'slide-unity', name: 'Unity Slide',
        description: 'Stylowy slide, w którym obie nogi ślizgają się równolegle, jedna z przodu, druga z tyłu, w pozycji przypominającej wypad. Wymaga doskonałej równowagi i kontroli krawędzi.',
        difficulty: 'advanced', category: 'slides', video: '',
        prerequisites: ['powerslide'],
        keyPoints: ['Wejdź w pozycję z szerokiego łuku.', 'Obie rolki muszą być pochylone na krawędzie i ślizgać się prostopadle do kierunku jazdy.', 'Utrzymuj biodra nisko, a tułów wyprostowany.', 'Rozłóż ręce dla lepszego balansu.'],
        commonMistakes: ['Jazda na płaskich rolkach zamiast na krawędziach.', 'Zbyt bliskie ustawienie nóg.', 'Utrata równowagi i obracanie się.'],
    },
    {
        id: 'slide-savannah', name: 'Savannah Slide',
        description: 'Techniczny slide, w którym jedna noga ślizga się na tylnym kole, a druga noga jest skrzyżowana z tyłu. Jest to zaawansowana technika wymagająca dużej siły w kostce.',
        difficulty: 'expert', category: 'slides', video: '',
        prerequisites: ['heel-manual', 'powerslide'],
        keyPoints: ['Zainicjuj jak powerslide, ale przenieś ciężar na piętę nogi ślizgającej.', 'Skrzyżuj drugą nogę z tyłu dla stabilności.', 'Użyj rąk do utrzymania balansu.', 'Kontroluj poślizg poprzez nacisk na piętę.'],
        commonMistakes: ['Ślizganie się na całej rolce zamiast na pięcie.', 'Utrata równowagi.', 'Zbyt mała prędkość.'],
    },
    {
        id: 'slide-soyale', name: 'Soyale Slide',
        description: 'Wariacja Soul Slide, w której łapiesz wolną nogę ręką. Dodaje to stylu i pokazuje dużą kontrolę nad pozycją.',
        difficulty: 'advanced', category: 'slides', video: '',
        prerequisites: ['soul-slide'],
        keyPoints: ['Wejdź w pozycję Soul Slide.', 'Zejdź bardzo nisko.', 'Sięgnij ręką i złap za wolną stopę lub rolkę.', 'Utrzymaj pozycję przez cały czas trwania ślizgu.'],
        commonMistakes: ['Utrata równowagi podczas próby złapania nogi.', 'Zbyt wysoka pozycja.', 'Puszczenie nogi zbyt wcześnie.'],
    },
    {
        id: 'slide-barrow', name: 'Barrow Slide',
        description: 'Bardzo niski i efektowny slide, w którym opierasz jedną lub obie ręce na ziemi, a nogi ślizgają się z przodu. Wygląda spektakularnie i jest świetnym sposobem na zatrzymanie się w ciasnych miejscach.',
        difficulty: 'advanced', category: 'slides', video: 'https://www.youtube.com/watch?v=Z7vj4oibURI',
        prerequisites: ['magic-slide'],
        keyPoints: ['Zainicjuj jak Magic Slide, schodząc ekstremalnie nisko.', 'Oprzyj rękę (lub obie) na ziemi dla stabilności.', 'Wypchnij nogi do przodu, aby zainicjować ślizg.', 'Kontroluj ślizg balansem ciała.'],
        commonMistakes: ['Zbyt gwałtowne opuszczenie rąk.', 'Utrata kontroli nad nogami.', 'Strach przed niską pozycją.'],
    },
    {
        id: 'slide-fast-slide', name: 'Fast Slide',
        description: 'Slide na jednej nodze, gdzie druga noga jest wyprostowana do tyłu. To szybki i skuteczny sposób na wytracenie prędkości, wymagający dobrej siły i balansu.',
        difficulty: 'advanced', category: 'slides', video: '',
        prerequisites: ['powerslide'],
        keyPoints: ['Zejdź nisko na nodze podporowej.', 'Noga ślizgająca jest prostopadła do kierunku jazdy.', 'Drugą nogę wyprostuj do tyłu, aby utrzymać równowagę.', 'Patrz w kierunku jazdy.'],
        commonMistakes: ['Zbyt wysoka pozycja.', 'Przenoszenie wagi na nogę ślizgającą.', 'Brak wyprostowania nogi z tyłu.'],
    },
    {
        id: 'slide-acid-cross', name: 'Acid Cross Slide',
        description: 'Wariacja Acid Slide, w której przednia noga jest jeszcze głębiej skrzyżowana, co zwiększa trudność i efekt wizualny.',
        difficulty: 'expert', category: 'slides', video: '',
        prerequisites: ['acid-slide'],
        keyPoints: ['Wymaga dużej elastyczności.', 'Skrzyżuj przednią nogę tak daleko, jak to możliwe.', 'Tylna noga ślizga się na zewnętrznej krawędzi.', 'Utrzymuj bardzo niską pozycję.'],
        commonMistakes: ['Niewystarczające skrzyżowanie nogi.', 'Utrata równowagi.', 'Jazda na płaskiej rolce.'],
    },
    {
        id: 'slide-mistrial', name: 'Mistrial Slide',
        description: 'Odwrócona wersja Acid Slide, wykonywana podczas jazdy tyłem. To niezwykle trudny technicznie slide dla ekspertów.',
        difficulty: 'expert', category: 'slides', video: '',
        prerequisites: ['acid-slide', 'backslide'],
        keyPoints: ['Zacznij od jazdy tyłem.', 'Skrzyżuj nogę z przodu i zainicjuj ślizg na zewnętrznej krawędzi drugiej nogi.', 'Wymaga doskonałej orientacji przestrzennej.', 'Patrz przez ramię.'],
        commonMistakes: ['Utrata orientacji.', 'Brak wystarczającej prędkości.', 'Niewłaściwa praca na krawędziach.'],
    },

    // --- GRINDS (7) ---
    {
        id: 'grind-frontside', name: 'Frontside Grind',
        description: 'Podstawowy grind, w którym podjeżdżasz do przeszkody przodem i wskakujesz na nią, ślizgając się na środkowej części płozy (H-block). To fundament wszystkich innych grindów.',
        difficulty: 'intermediate', category: 'grinds', video: '',
        prerequisites: ['basic-jump'],
        keyPoints: ['Podjedź do rurki lub murka równolegle.', 'Wyskocz i wyląduj na obu płozach na przeszkodzie.', 'Utrzymuj równowagę, zginając kolana.', 'Zeskocz z końca przeszkody, lądując miękko.'],
        commonMistakes: ['Niewystarczająca wysokość skoku.', 'Lądowanie na kołach zamiast na płozie.', 'Utrata równowagi na przeszkodzie.'],
        gearTips: 'Wymaga rolek do jazdy agresywnej ze specjalnymi płozami (H-block i soul plates).'
    },
    {
        id: 'grind-soul', name: 'Soul Grind',
        description: 'Jeden z najbardziej stabilnych i fundamentalnych grindów. Tylna noga ślizga się na soul plate (półce na bucie), a przednia na płozie, prostopadle do przeszkody.',
        difficulty: 'intermediate', category: 'grinds', video: 'https://www.youtube.com/watch?v=TTbL9j9DobA',
        prerequisites: ['grind-frontside'],
        keyPoints: ['Tylna noga ląduje wzdłuż przeszkody na soul plate.', 'Przednia noga ląduje prostopadle na H-blocku.', 'Zejdź nisko, aby obniżyć środek ciężkości.', 'Patrz na koniec przeszkody.'],
        commonMistakes: ['Niewłaściwe ułożenie nóg.', 'Ześlizgiwanie się z przeszkody.', 'Zbyt wysoka pozycja.'],
        gearTips: 'Wymaga rolek do jazdy agresywnej.'
    },
    {
        id: 'grind-makio', name: 'Makio Grind',
        description: 'Jednonożna wersja Soul Grinda. Ślizgasz się tylko na jednej nodze na soul plate, a drugą nogę łapiesz ręką (grab). Wygląda bardzo stylowo.',
        difficulty: 'advanced', category: 'grinds', video: '',
        prerequisites: ['grind-soul'],
        keyPoints: ['Wskocz na przeszkodę, lądując na jednej nodze na soul plate.', 'Drugą nogę podciągnij i złap ręką.', 'Utrzymuj równowagę, patrząc na koniec przeszkody.', 'Zejdź nisko.'],
        commonMistakes: ['Utrata równowagi.', 'Problem ze złapaniem nogi.', 'Ześlizgnięcie się z murka.'],
        gearTips: 'Wymaga rolek do jazdy agresywnej.'
    },
    {
        id: 'grind-mizou', name: 'Mizou Grind',
        description: 'Odmiana Soul Grinda, w której to przednia noga jest na soul plate, a tylna prostopadle na płozie. Wymaga innej koordynacji.',
        difficulty: 'advanced', category: 'grinds', video: '',
        prerequisites: ['grind-soul'],
        keyPoints: ['Przednia noga ląduje na soul plate wzdłuż przeszkody.', 'Tylna noga ląduje na H-blocku prostopadle.', 'Wymaga większego pochylenia się do przodu.', 'Utrzymuj niską pozycję.'],
        commonMistakes: ['Mylenie z Soul Grindem.', 'Utrata równowagi do tyłu.', 'Niewłaściwe ułożenie nóg.'],
        gearTips: 'Wymaga rolek do jazdy agresywnej.'
    },
    {
        id: 'grind-acid', name: 'Acid Grind',
        description: 'Techniczna wariacja Soul Grinda, gdzie przednia noga jest skrzyżowana. Wygląda bardzo efektownie i wymaga dobrej gibkości.',
        difficulty: 'advanced', category: 'grinds', video: '',
        prerequisites: ['grind-soul'],
        keyPoints: ['Pozycja tylnej nogi jak w Soul Grindzie.', 'Przednią nogę skrzyżuj i wyląduj na płozie.', 'Wymaga dużej rotacji w biodrach.', 'Zejdź nisko dla stabilności.'],
        commonMistakes: ['Niewystarczające skrzyżowanie nogi.', 'Utrata równowagi.', 'Plątanie nóg.'],
        gearTips: 'Wymaga rolek do jazdy agresywnej.'
    },
    {
        id: 'grind-royale', name: 'Royale Grind',
        description: 'Bardzo stylowy grind, w którym ślizgasz się na wewnętrznych krawędziach obu płóz, z nogami ugiętymi i blisko siebie. Wymaga doskonałej równowagi.',
        difficulty: 'expert', category: 'grinds', video: 'https://www.youtube.com/watch?v=31v4GC_8qgc',
        prerequisites: ['grind-frontside'],
        keyPoints: ['Wyląduj na przeszkodzie na wewnętrznych krawędziach płóz.', 'Zejdź bardzo nisko, niemal siadając na rolkach.', 'Trzymaj kolana blisko siebie.', 'Patrz na koniec przeszkody.'],
        commonMistakes: ['Ześlizgiwanie się z powodu zbyt małego pochylenia.', 'Utrata równowagi.', 'Zbyt wysoka pozycja.'],
        gearTips: 'Wymaga rolek do jazdy agresywnej.'
    },
    {
        id: 'grind-backside-royale', name: 'Backside Royale',
        description: 'Royale wykonywany z najazdu tyłem do przeszkody. Jest znacznie trudniejszy i wymaga dużej pewności siebie oraz kontroli.',
        difficulty: 'expert', category: 'grinds', video: '',
        prerequisites: ['grind-royale'],
        keyPoints: ['Podjedź do przeszkody tyłem.', 'Wyskocz z obrotem o 180 stopni i wyląduj w pozycji Royale.', 'Wymaga "ślepego" lądowania na przeszkodzie.', 'Patrz przez ramię, aby zlokalizować murek.'],
        commonMistakes: ['Nietrafienie w przeszkodę.', 'Niewystarczająca rotacja.', 'Utrata równowagi przy lądowaniu.'],
        gearTips: 'Wymaga rolek do jazdy agresywnej.'
    },

    // --- JUMPS & GRABS (8 new) ---
    {
        id: 'grab-indy', name: 'Indy Grab',
        description: 'Klasyczny grab, w którym tylna ręka łapie za zewnętrzną krawędź (toe side) przedniej rolki. To stylowy i stabilny chwyt.',
        difficulty: 'intermediate', category: 'jumps', video: '',
        prerequisites: ['basic-jump', 'safety-grab'],
        keyPoints: ['Podciągnij kolana do klatki piersiowej.', 'Tylna ręka sięga i łapie za palce przedniej rolki.', 'Staraj się trzymać ciało w jednej linii.', 'Puść grab przed lądowaniem.'],
        commonMistakes: ['Garbienie się.', 'Utrata równowagi.', 'Mylenie z Mute Grabem.'],
    },
    {
        id: 'grab-japan-air', name: 'Japan Air Grab',
        description: 'Bardzo stylowa wariacja Mute Grabu. Po złapaniu rolki, podciągasz ją wysoko za plecy, zginając mocno nogę. Wygląda niezwykle efektownie.',
        difficulty: 'advanced', category: 'jumps', video: '',
        prerequisites: ['mute-grab'],
        keyPoints: ['Wykonaj Mute Grab.', 'Podciągnij złapaną nogę wysoko, tak aby rolka znalazła się za Twoim kolanem.', 'Wymaga dobrej gibkości.', 'Utrzymaj stabilną pozycję w powietrzu.'],
        commonMistakes: ['Niewystarczające podciągnięcie nogi.', 'Utrata równowagi.', 'Zbyt krótki czas trzymania grabu.'],
    },
    {
        id: 'grab-stiffy', name: 'Stiffy Grab',
        description: 'Grab, w którym łapiesz obiema rękami za rolki (jak w Rocket Grab) i prostujesz nogi oraz tułów, tworząc sztywną, prostą linię w powietrzu.',
        difficulty: 'advanced', category: 'jumps', video: '',
        prerequisites: ['rocket-grab'],
        keyPoints: ['Zainicjuj jak Rocket Grab.', 'Wyprostuj nogi i tułów, tworząc jedną linię.', 'Wymaga dużej siły core.', 'Zegnij nogi przed lądowaniem.'],
        commonMistakes: ['Brak pełnego wyprostu.', 'Utrata równowagi.', 'Zbyt późne zgięcie nóg przed lądowaniem.'],
    },
    {
        id: 'grab-liu-kang', name: 'Liu Kang Grab',
        description: 'Spektakularny grab, który naśladuje kopnięcie z gry Mortal Kombat. Jedna noga jest wyprostowana do przodu, a druga zgięta pod siebie.',
        difficulty: 'advanced', category: 'jumps', video: '',
        prerequisites: ['basic-jump'],
        keyPoints: ['Wyskocz wysoko.', 'Jedną nogę wyprostuj mocno do przodu.', 'Drugą nogę podciągnij pod pośladek.', 'Można dodać grab do wyprostowanej nogi dla stylu.'],
        commonMistakes: ['Niewystarczająca wysokość skoku.', 'Brak dynamiki w ruchu.', 'Chaotyczna pozycja w powietrzu.'],
    },
    {
        id: 'jump-180-grab', name: 'Skok 180 z Grabem',
        description: 'Połączenie dwóch fundamentalnych umiejętności: skoku 180 i prostego grabu (np. Safety). Uczy kontroli nad ciałem podczas rotacji.',
        difficulty: 'intermediate', category: 'jumps', video: '',
        prerequisites: ['jump-180', 'safety-grab'],
        keyPoints: ['Zainicjuj rotację 180.', 'W szczytowym momencie lotu wykonaj szybki Safety Grab.', 'Puść grab i skup się na lądowaniu tyłem.', 'Ląduj miękko i stabilnie.'],
        commonMistakes: ['Zaniedbanie rotacji na rzecz grabu.', 'Niestabilne lądowanie.', 'Zbyt długie trzymanie grabu.'],
    },
    {
        id: 'jump-360-grab', name: 'Skok 360 z Grabem',
        description: 'Wykonanie pełnego obrotu o 360 stopni z jednoczesnym grabem. To zaawansowany trik pokazujący mistrzowską kontrolę w powietrzu.',
        difficulty: 'expert', category: 'jumps', video: '',
        prerequisites: ['jump-360', 'jump-180-grab'],
        keyPoints: ['Zainicjuj bardzo mocną rotację.', 'Trzymaj ciało blisko osi obrotu, aby przyspieszyć rotację.', 'Wykonaj szybki, pewny grab.', 'Skup wzrok na punkcie lądowania.'],
        commonMistakes: ['Niedokręcenie rotacji.', 'Utrata równowagi.', 'Zbyt wolny grab.'],
    },
    {
        id: 'jump-wallride', name: 'Wallride',
        description: 'Jazda po pionowej lub pochyłej ścianie. To klasyczny trik w jeździe miejskiej, który wymaga odwagi i dobrej techniki najazdu.',
        difficulty: 'advanced', category: 'jumps', video: '',
        prerequisites: ['basic-jump', 'power-jump'],
        keyPoints: ['Najedź na ścianę pod ostrym kątem, nie na wprost.', 'Wyskocz lekko, aby wylądować kołami na ścianie.', 'Pochyl ciało w stronę przeciwną do ściany, aby się od niej nie "odkleić".', 'Zeskocz ze ściany, lądując stabilnie.'],
        commonMistakes: ['Najazd pod zbyt dużym kątem (czołowo).', 'Brak pochylenia ciała, co powoduje ześlizgnięcie.', 'Strach i zbyt wczesne zeskoczenie.'],
    },
    {
        id: 'jump-transfer', name: 'Transfer',
        description: 'Przeskok z jednej przeszkody na drugą (np. z murka na murek) lub przez przerwę (gap). Kluczowa umiejętność w jeździe agresywnej i urban skatingu.',
        difficulty: 'advanced', category: 'jumps', video: '',
        prerequisites: ['power-jump'],
        keyPoints: ['Dokładnie oceń odległość i różnicę wysokości.', 'Wybij się mocno z końca pierwszej przeszkody.', 'Skup wzrok na miejscu lądowania.', 'Ląduj miękko, gotowy do dalszej jazdy lub grindu.'],
        commonMistakes: ['Zła ocena odległości.', 'Zbyt słabe wybicie.', 'Niestabilne lądowanie.'],
    },

    // --- WIZARD (6 new) ---
    {
        id: 'wizard-sputnik', name: 'Sputnik',
        description: 'Niski, obrotowy ruch, w którym jedna noga jest wyprostowana i rysuje koła po ziemi, podczas gdy druga noga napędza ruch. Wygląda bardzo efektownie i jest inspirowany breakdance.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['one-foot-spin', 'sit-spin'],
        keyPoints: ['Zejdź bardzo nisko, niemal do siadu.', 'Wyprostuj jedną nogę i użyj jej do balansu i rysowania kół.', 'Drugą nogą, ugiętą pod ciałem, odpychaj się delikatnie, aby utrzymać rotację.', 'Wymaga dużej siły i gibkości.'],
        commonMistakes: ['Zbyt wysoka pozycja.', 'Utrata rotacji.', 'Brak płynności w ruchu nogi rysującej koła.'],
    },
    {
        id: 'wizard-panther-to-lion', name: 'Połączenie Panther-Lion',
        description: 'Płynne przejście między dwoma kluczowymi ruchami Wizard Skating: Panther Cross i Lion Cross. Opanowanie tej kombinacji to duży krok w stronę prawdziwego "flow".',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['panther-cross', 'lion-cross'],
        keyPoints: ['Zacznij od jednego z ruchów, np. Panther Cross.', 'Płynnie, poprzez zmianę skrzyżowania nóg, przejdź do Lion Cross.', 'Kluczem jest ciągła rotacja w biodrach i praca na krawędziach.', 'Utrzymuj stałą prędkość i rytm.'],
        commonMistakes: ['Zatrzymywanie się między ruchami.', 'Utrata równowagi podczas zmiany pozycji.', 'Brak płynności.'],
    },
    {
        id: 'wizard-heel-toe-pivot', name: 'Pivot Heel-Toe',
        description: 'Wykonanie szybkiego obrotu (pivotu) o 180 stopni, balansując w pozycji heel-toe. To bardzo trudny technicznie ruch, który dodaje finezji do przejazdów.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['volte-pivot', 'heel-toe-rolls'],
        keyPoints: ['Utrzymaj stabilną pozycję heel-toe.', 'Zainicjuj rotację głową i ramionami.', 'Obrót powinien być szybki i na małej przestrzeni.', 'Wyląduj z powrotem w stabilnej pozycji heel-toe.'],
        commonMistakes: ['Utrata balansu heel-toe.', 'Zbyt wolna rotacja.', 'Niestabilne wyjście z obrotu.'],
        gearTips: 'Praktycznie niemożliwe bez szyny z rockerem.'
    },
    {
        id: 'wizard-flamenco', name: 'Flamenco',
        description: 'Ruch inspirowany tańcem flamenco, łączący w sobie toe-press turns z charakterystycznym, rytmicznym uderzaniem piętą o ziemię. Bardzo muzykalny i stylowy element.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['toe-press-turns'],
        keyPoints: ['Wykonaj ciasny skręt na palcach (toe-press).', 'W trakcie skrętu, uderz rytmicznie piętą drugiej rolki o ziemię.', 'Kluczem jest rytm i koordynacja.', 'Ruch powinien być lekki i sprężysty.'],
        commonMistakes: ['Brak rytmu.', 'Zbyt mocne uderzanie piętą.', 'Utrata równowagi podczas skrętu.'],
    },
    {
        id: 'wizard-slalom-flow', name: 'Wizard-Slalom Flow',
        description: 'Integracja precyzyjnych ruchów slalomowych (jak wężyk czy krzyżak) w płynne, swobodne linie w stylu Wizard. To połączenie technicznej precyzji z kreatywnym flow.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['slalom-cross-fwd', 'grapevine'],
        keyPoints: ['Nie myśl o pachołkach, używaj ruchów slalomowych w otwartej przestrzeni.', 'Łącz wężyki, krzyżaki i pivoty w jedną, ciągłą sekwencję.', 'Skup się na płynności przejść między elementami.', 'Eksperymentuj z rytmem i prędkością.'],
        commonMistakes: ['Wykonywanie ruchów mechanicznie, bez płynności.', 'Zatrzymywanie się między trikami.', 'Brak kreatywności w łączeniu sekwencji.'],
    },
    {
        id: 'wizard-switch-stance', name: 'Jazda "Switch" (na słabszą nogę)',
        description: 'Wykonywanie wszystkich podstawowych ruchów Wizard (pivots, grapevines, etc.) na swoją "słabszą" nogę. To ostateczny test kontroli i symetrii, który podwaja Twój repertuar trików.',
        difficulty: 'expert', category: 'wizard', video: '',
        prerequisites: ['grapevine', 'volte-pivot'],
        keyPoints: ['Zacznij od najprostszych ruchów, jak jazda na jednej nodze switch.', 'Bądź cierpliwy, mózg musi zbudować nowe połączenia nerwowe.', 'Skup się na poprawnej technice, nawet jeśli na początku czuje się to bardzo dziwnie.', 'Regularne ćwiczenie jest kluczem.'],
        commonMistakes: ['Zbyt szybkie przechodzenie do skomplikowanych ruchów.', 'Frustracja i rezygnacja.', 'Powielanie złych nawyków na słabszą stronę.'],
    },

    // --- SPINS (4 new) ---
    {
        id: 'spin-camel', name: 'Camel Spin',
        description: 'Kolejny klasyk z jazdy figurowej. Obrót na jednej nodze z tułowiem pochylonym do przodu i wolną nogą wyprostowaną do tyłu, tworząc linię równoległą do ziemi.',
        difficulty: 'expert', category: 'spins', video: '',
        prerequisites: ['one-foot-spin'],
        keyPoints: ['Wejdź w obrót z dużą prędkością.', 'Pochyl tułów do przodu, jednocześnie podnosząc nogę do tyłu.', 'Utrzymaj pozycję "T" przez jak najdłuższy czas.', 'Wymaga dużej siły pleców i elastyczności.'],
        commonMistakes: ['Zbyt niskie podniesienie nogi.', 'Garbienie się zamiast utrzymywania prostych pleców.', 'Utrata prędkości obrotowej.'],
    },
    {
        id: 'spin-crossfoot', name: 'Crossfoot Spin',
        description: 'Obrót na dwóch nogach, ale ze skrzyżowanymi stopami. Wygląda bardzo stylowo i jest dobrym ćwiczeniem na równowagę w nietypowej pozycji.',
        difficulty: 'advanced', category: 'spins', video: '',
        prerequisites: ['two-foot-spin'],
        keyPoints: ['Zainicjuj obrót, a następnie płynnie skrzyżuj nogi.', 'Utrzymuj ciężar równomiernie na obu stopach.', 'Trzymaj kolana blisko siebie.', 'Użyj ramion do kontroli prędkości.'],
        commonMistakes: ['Potknięcie się o własne nogi.', 'Utrata równowagi.', 'Zbyt gwałtowne krzyżowanie nóg.'],
    },
    {
        id: 'spin-backwards-entry', name: 'Wejście w spin z jazdy tyłem',
        description: 'Bardziej kontrolowany i elegancki sposób na wejście w obrót na jednej nodze, wykorzystując najazd tyłem na zewnętrznej krawędzi. To standardowa technika w jeździe figurowej.',
        difficulty: 'advanced', category: 'spins', video: '',
        prerequisites: ['one-foot-spin', 'bwd-one-foot'],
        keyPoints: ['Najedź tyłem po łuku na zewnętrznej krawędzi.', 'Zainicjuj rotację, obracając tułów i wolną nogę.', 'Płynnie przejdź na przednią część rolki, aby rozpocząć spin.', 'Ta technika pozwala na wygenerowanie dużej prędkości obrotowej.'],
        commonMistakes: ['Jazda na płaskiej krawędzi.', 'Zbyt mała prędkość najazdu.', 'Niestabilne przejście do obrotu.'],
    },
    {
        id: 'spin-heel-toe', name: 'Heel-Toe Spin',
        description: 'Obrót na dwóch nogach, ale balansując na pięcie jednej rolki i palcach drugiej. To trudna technicznie wariacja, która jest krokiem w stronę spinów na jednym kole.',
        difficulty: 'expert', category: 'spins', video: '',
        prerequisites: ['heel-heel-spin', 'toe-toe-spin'],
        keyPoints: ['Znajdź punkt balansu na pięcie i palcach.', 'Utrzymuj stopy bardzo blisko siebie.', 'Zainicjuj płynną rotację.', 'Wymaga ogromnej precyzji.'],
        commonMistakes: ['Utrata balansu.', 'Obracanie się na całych rolkach.', 'Zbyt duża odległość między stopami.'],
    },

    // --- BASIC/TRANSITIONS (3 new) ---
    {
        id: 'transition-spread-eagle', name: 'Przejście Spread Eagle',
        description: 'Jazda z nogami szeroko rozstawionymi i palcami skierowanymi na zewnątrz, tworząc kąt 180 stopni. To klasyczna figura z jazdy figurowej, która wymaga dużej elastyczności w biodrach.',
        difficulty: 'advanced', category: 'basic', video: '',
        prerequisites: ['lunge-turn'],
        keyPoints: ['Stopniowo otwieraj biodra, kierując palce na zewnątrz.', 'Przenieś ciężar na wewnętrzne krawędzie rolek.', 'Utrzymuj tułów wyprostowany.', 'Zacznij od małego kąta i stopniowo go zwiększaj.'],
        commonMistakes: ['Brak wystarczającej elastyczności.', 'Utrata równowagi.', 'Zbyt gwałtowna próba wejścia w pozycję.'],
    },
    {
        id: 'transition-inside-mohawk', name: 'Wewnętrzny Mohawk',
        description: 'Odmiana przejścia Mohawk, w której pięty pozostają blisko siebie podczas obrotu. Jest to bardziej techniczne przejście, często używane w tańcu i jeździe figurowej.',
        difficulty: 'advanced', category: 'basic', video: 'https://www.youtube.com/watch?v=XFhNoxqGoPM',
        prerequisites: ['mohawk-transition'],
        keyPoints: ['Podczas otwierania bioder, trzymaj pięty jak najbliżej siebie.', 'Przejście odbywa się na wewnętrznych krawędziach.', 'Wymaga większej elastyczności niż standardowy Mohawk.', 'Utrzymuj niską pozycję.'],
        commonMistakes: ['Oddalanie się pięt od siebie.', 'Utrata równowagi.', 'Brak płynności.'],
    },
    {
        id: 'footwork-dribbling', name: 'Dribbling (szybka praca nóg)',
        description: 'Bardzo szybkie, krótkie kroki wykonywane w miejscu lub w ruchu. Używane w hokeju i roller soccer do błyskawicznej zmiany kierunku i dezorientacji przeciwnika. Doskonałe ćwiczenie na zwinność.',
        difficulty: 'intermediate', category: 'basic', video: 'https://www.youtube.com/watch?v=vCDqRVBHOQY',
        prerequisites: ['one-foot-balance'],
        keyPoints: ['Utrzymuj ciężar ciała na przedniej części stóp.', 'Wykonuj bardzo szybkie i krótkie kroki.', 'Trzymaj kolana mocno ugięte.', 'Pracuj całym ciałem, nie tylko nogami.'],
        commonMistakes: ['Zbyt duże i powolne kroki.', 'Prostowanie nóg.', 'Brak dynamiki.'],
    }
];



export const RECOVERY_PROTOCOLS: {[key: string]: { name: string; duration: number }[]} = {
    A: [
        { name: 'Quadriceps', duration: 90 },
        { name: 'Glutes', duration: 60 },
        { name: 'Calves', duration: 60 },
        { name: 'Hamstrings', duration: 60 }
    ],
    B: [
        { name: 'Foam Rolling - Quadriceps', duration: 90 },
        { name: 'Foam Rolling - Glutes', duration: 60 },
        { name: 'Foam Rolling - Calves', duration: 60 },
        { name: 'Foam Rolling - Hamstrings', duration: 60 },
        { name: 'Warm Water (40-42°C)', duration: 180 },
        { name: 'Cold Water (10-15°C)', duration: 120 },
        { name: 'Warm Water (repeat)', duration: 180 },
        { name: 'Cold Water (repeat)', duration: 120 }
    ],
    C: [
        { name: 'Light Cycling', duration: 600 },
        { name: 'Stretching', duration: 300 }
    ]
};