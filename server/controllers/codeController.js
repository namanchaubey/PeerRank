export const submitCode = async (req, res) => {
    const { code, language, userId } = req.body;
    try {
      console.log(`Code received from ${userId}:`, code);
      res.status(200).json({ message: 'Code submitted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  