// @desc Get goals
// @route Get /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' });
}

// @desc Post goals
// @route Post /api/goals
// @access Private
const setGoals = (req, res) => {
  if(!req.body.text) {
    res.status(400);
    throw new Error('Please add text');
  }
  res.status(200).json({ message: 'Set goals' });
}

// @desc Put goals
// @route Put /api/goals/:id
// @access Private
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
}

// @desc Delete goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
}
module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
}