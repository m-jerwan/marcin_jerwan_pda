
require('minitest/autorun')
require_relative('card.rb')
require_relative('testing_task_2.rb')


class TestingTask < MiniTest::Test

  def test_check_for_ace()
    card_1 = Card.new('Ace', 1)
    cardGame_1 = CardGame.new()
    actual = cardGame_1.check_for_ace(card_1)
    assert_equal(true, actual)
  end

  def test_highest_card()
    card_1 = Card.new('King', 11)
    card_2 = Card.new('Qeen', 10)
    cardGame_1 = CardGame.new()

    actual = cardGame_1.highest_card(card_1, card_2)
    assert_equal('King', actual)
  end

  def test_cards_total()
      card_1 = Card.new('King', 11)
      card_2 = Card.new('Qeen', 10)
      cardGame_1 = CardGame.new()
      allCards = [card_1, card_2]

      actual = cardGame_1.cards_total(allCards)
      assert_equal("You have a total of 21", actual)
  end


end
