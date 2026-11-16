# IFM Flashcards

Leitner-system flashcards for the International Financial Markets exam (9 Dec 2026).

## Put it online (GitHub Pages, about 5 minutes)

1. Sign in at github.com → **+** (top right) → **New repository**.
   Name it `ifm-flashcards`, set it to **Public**, and click **Create repository**.
2. On the empty repo page, click **uploading an existing file**.
3. In Finder, open the `ifm-flashcards` folder, select **everything inside it**
   (`index.html`, `app.js`, `cards.js`, `styles.css`, `sw.js`, `manifest.webmanifest`,
   `README.md` and the `icons` folder) and drag it onto the upload area.
   Check that `index.html` sits at the top level, not inside a subfolder.
   Click **Commit changes**.
4. In the repo, go to **Settings → Pages**. Under *Build and deployment* choose
   **Deploy from a branch**, branch **main**, folder **/ (root)**, and click **Save**.
5. Wait 1–2 minutes and refresh that page. It shows your URL:
   `https://<your-username>.github.io/ifm-flashcards/`

## Add it to your iPhone

1. Open the URL in **Safari** (not Chrome).
2. Tap **Share** → **Add to Home Screen** → **Add**.
3. Always study from the home-screen icon. It opens full screen, works offline,
   and keeps its own saved progress (separate from the Safari tab).

## How the boxes work

| Box | Comes back after |
| --- | --- |
| 1 | 1 day |
| 2 | 2 days |
| 3 | 4 days |
| 4 | 7 days |
| 5 | 12 days |

- **Right:** the card moves up one box.
- **Wrong:** the card moves down one box, comes back tomorrow, and repeats once at the end of the session.
- Nothing is scheduled after 8 Dec, so every card comes back before the exam.
- Open questions: answer in your head, tap **Show answer**, then rate yourself.
  MCQs are graded automatically, with the options shuffled each time.
- The undo arrow (top right) reverses a mis-tap.

## Editing cards later

Edit `cards.js` (on GitHub, open the file and click the pencil icon). Keep each card's `id`
unchanged so its progress is kept. After changing any file, also open `sw.js` and change
`ifm-v1` to `ifm-v2` (then v3, and so on), so phones pick up the new version. The update
appears the second time you open the app.
