# 🧠 Fraud Detection Dashboard

An interactive fraud detection dashboard built using **Next.js**, **Tailwind CSS**, and **Chart.js**, visualizing evaluation metrics from a machine learning model trained in a Jupyter Notebook.

---

## 🚀 Features

- 📊 Transaction summary
- 🥧 Class distribution (Pie chart)
- 📈 Performance metrics (Precision, Recall, F1-score)
- 📋 Confusion matrix (Table)
- 📓 Jupyter Notebook for training the model
- ⚡ Responsive and deployable with Vercel

---

## 🧪 Model Training

Model training is done in the notebook [`model_training.ipynb`](notebook/model_training.ipynb). It:

- Loads the credit card fraud dataset
- Samples a balanced subset (e.g., 1:6 fraud to legit)
- Trains a `RandomForestClassifier`
- Outputs key metrics (accuracy, precision, recall, F1-score)
- Plots a confusion matrix

### 📦 Python Setup

```bash
cd notebook
pip install pandas scikit-learn matplotlib jupyter
jupyter notebook model_training.ipynb
````

---

## 🖥️ Frontend Setup (Next.js)

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 📤 Deployment

Deploy to Vercel with:

```bash
npx vercel
```

---

## 📝 License

MIT License © 2025 [Rewant Goenka](https://www.linkedin.com/in/rewant-goenka/)
