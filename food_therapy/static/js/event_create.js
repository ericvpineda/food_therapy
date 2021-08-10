let FoodListPage = false;

function navDashboard() {
  window.location = ''
}

$(document).ready(function() {
  $('#list-btn').on('click', function() {
    FoodListPage = false;
    $('#list-btn').switchClass('food-btn-inactive', 'food-btn-active', 200)
    $('#near-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#dishes-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#desserts-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#fruits-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('.nav-tab').css('left', '2.5%')
    $('.food-header').css('background', '#FF295D')


    $('#img-1').attr(
      'src', '/static/food-images/list/Avocado.jpeg')
    $('#img-2').attr(
      'src', '/static/food-images/list/Ice_Cream.jpeg')
    $('#img-3').attr(
      'src', '/static/food-images/list/Dark_Chocolate.jpeg')
    $('#img-5').attr(
      'src', '/static/food-images/list/Tea.jpeg')
    $('#img-6').attr(
      'src', '/static/food-images/list/Watermelon.jpeg')
    $('#img-7').attr(
      'src', '/static/food-images/list/Salmon.jpeg')
    $('#img-8').attr(
      'src', '/static/food-images/list/Porridge.jpeg')
    $('#img-9').attr(
      'src', '/static/food-images/list/Pizza.jpeg')
    $('#img-10').attr(
      'src', '/static/food-images/list/Cake.jpeg')
  })

  $('#near-btn').on('click', function() {
    FoodListPage = false;
    $('#list-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#near-btn').switchClass('food-btn-inactive', 'food-btn-active', 200)
    $('#dishes-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#desserts-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#fruits-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('.nav-tab').css('left', '21.5%')
    $('.food-header').css('background', '#FF295D')


    $('#img-1').attr(
      'src', '/static/food-images/near/Yogurt_Bowl.jpeg')
    $('#img-2').attr(
      'src', '/static/food-images/near/Salmon.jpeg')
    $('#img-3').attr(
      'src', '/static/food-images/near/Salad.jpeg')
    $('#img-5').attr(
      'src', '/static/food-images/near/Porridge.jpeg')
    $('#img-6').attr(
      'src', '/static/food-images/near/Banana.jpeg')
    $('#img-7').attr(
      'src', '/static/food-images/near/Cookies.jpeg')
    $('#img-8').attr(
      'src', '/static/food-images/near/Cake.jpeg')
    $('#img-9').attr(
      'src', '/static/food-images/near/Steak.jpeg')
    $('#img-10').attr(
      'src', '/static/food-images/near/Bubble_Tea.jpeg')
  })

  $('#dishes-btn').on('click', function() {
    FoodListPage = false;
    $('#list-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#near-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#dishes-btn').switchClass('food-btn-inactive', 'food-btn-active', 200)
    $('#desserts-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#fruits-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('.nav-tab').css('left', '40.5%')
    $('.food-header').css('background', '#FF295D')


    $('#img-1').attr(
      'src', '/static/food-images/dishes/Noodles.jpg')
    $('#img-2').attr(
      'src', '/static/food-images/dishes/Steak.jpeg')
    $('#img-3').attr(
      'src', '/static/food-images/dishes/Chicken.jpg')
    $('#img-5').attr(
      'src', '/static/food-images/dishes/Shrimp.jpg')
    $('#img-6').attr(
      'src', '/static/food-images/dishes/Salad.jpeg')
    $('#img-7').attr(
      'src', '/static/food-images/dishes/Salmon.jpeg')
    $('#img-8').attr(
      'src', '/static/food-images/dishes/Porridge.jpeg')
    $('#img-9').attr(
      'src', '/static/food-images/dishes/Sushi.jpg')
    $('#img-10').attr(
      'src', '/static/food-images/dishes/Hamburger.jpg')
  })

  $('#desserts-btn').on('click', function() {
    FoodListPage = true;
    $('#list-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#near-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#dishes-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#desserts-btn').switchClass('food-btn-inactive', 'food-btn-active', 200)
    $('#fruits-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('.nav-tab').css('left', '59.5%')
    $('.food-header').css('background', '#FF295D')


    $('#img-1').attr(
      'src', '/static/food-images/desserts/Yogurt_Bowl.jpeg')
    $('#img-2').attr(
      'src', '/static/food-images/desserts/Ice_Cream.jpeg')
    $('#img-3').attr(
      'src', '/static/food-images/desserts/Dark_Chocolate.jpeg')
    $('#img-5').attr(
      'src', '/static/food-images/desserts/Chips.jpg')
    $('#img-6').attr(
      'src', '/static/food-images/desserts/tea.jpeg')
    $('#img-7').attr(
      'src', '/static/food-images/desserts/Cookies.jpeg')
    $('#img-8').attr(
      'src', '/static/food-images/desserts/Cake.jpeg')
    $('#img-9').attr(
      'src', '/static/food-images/desserts/Nuts.jpg')
    $('#img-10').attr(
      'src', '/static/food-images/desserts/Bubble_Tea.jpeg')

    $('#img-3').on('click', function() {
      if (FoodListPage) {
        location.href = 'food_detail'
      }
    })
  })

  $('#fruits-btn').on('click', function() {
    FoodListPage = false
    $('#list-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#near-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#dishes-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#desserts-btn').switchClass('food-btn-active', 'food-btn-inactive', 200)
    $('#fruits-btn').switchClass('food-btn-inactive', 'food-btn-active', 200)
    $('.nav-tab').css('left', '78.5%')
    $('.food-header').css('background', '#FF295D')


    $('#img-1').attr(
      'src', '/static/food-images/fruits/Avocado.jpeg')
    $('#img-2').attr(
      'src', '/static/food-images/fruits/Papaya.jpg')
    $('#img-3').attr(
      'src', '/static/food-images/fruits/Strawberries.jpg')
    $('#img-5').attr(
      'src', '/static/food-images/fruits/Cucumber.jpg')
    $('#img-6').attr(
      'src', '/static/food-images/fruits/Kiwi.jpg')
    $('#img-7').attr(
      'src', '/static/food-images/fruits/Banana.jpeg')
    $('#img-8').attr(
      'src', '/static/food-images/fruits/Orange.jpg')
    $('#img-9').attr(
      'src', '/static/food-images/fruits/Watermelon.jpeg')
    $('#img-10').attr(
      'src', '/static/food-images/fruits/Bluberries.jpg')
  })
})