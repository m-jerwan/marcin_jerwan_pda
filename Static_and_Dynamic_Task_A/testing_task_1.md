### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) #change to snake case to maintain consistency
    if card.value = 1 #= => ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #dif => def  # coma between card1 and card2
  if card1.value > card2.value
    return card.name #card => card1 #name => suit
  else
    card2 #return(for consistency) #.suit
  end
end
end  #wrong place for class end

def self.cards_total(cards) #no need for self
  total # =0 (for readability as this is for integer counter)
  for card in cards
    total += card.value
    return "You have a total of" + total # changed to interpolation
      #return is in inside the 'for' loop, should be outside
  end
end
#class end here

```
