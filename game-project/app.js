var game = {
  player: {
    health: 100,
    attack: 10,
    heal: 18,
    name: 'Player'
  },
  monster: {
    health: 100,
    attack: 12,
    name: 'Monster'
  },
  attackFactor: 100,
  specialAttackFactor: 90,
  running: false,
  events: []
};

var data = {
  game: game
};

var getAttackForce = function(attacker, factor) {
  var damage = (attacker.health * attacker.attack)/factor
  return Math.round(damage);
};

var restartGame = function() {
  game.player.health = 100;
  game.monster.health = 100;
  game.running = false;
  game.events = [];
};

var appendEvent = function(attacker, victim, action, actionNumber) {
  var currentEvent = {
    attacker: attacker,
    action: action,
    victim: victim,
    actionNumber: actionNumber
  };

  game.events.unshift(currentEvent);
};

var handleDamage = function(attackerName, victim, damage) {
  var remainingHealth = victim.health - damage;

  appendEvent(attackerName, victim.name, 'hits', damage);

  if (remainingHealth > 0) {
    victim.health = remainingHealth;
    return;
  }

  alert(attackerName + ' WON');
  restartGame();
};

var handleHeal = function(victim) {
  var health = victim.health + victim.heal;

  appendEvent(victim.name, 'himself', 'heals', victim.heal);

  if (health > 100) {
    victim.health = 100;
    return;
  }

  victim.health = health;
};

var runMonsterAttack = function() {
  var monsterDamage;

  if (!game.running) {
    return;
  }

  monsterDamage = getAttackForce(game.monster, game.attackFactor);
  handleDamage(game.monster.name, game.player, monsterDamage);
};

var methods = {
  startGame: function() {
    game.running = true;
  },
  attack: function() {
    var playerDamage = getAttackForce(game.player, game.attackFactor);

    handleDamage(game.player.name, game.monster, playerDamage);
    runMonsterAttack();
  },
  specialAttack: function() {
    var playerDamage = getAttackForce(game.player, game.specialAttackFactor);

    handleDamage(game.player.name, game.monster, playerDamage);
    runMonsterAttack();
  },
  heal: function() {
    handleHeal(game.player)
    runMonsterAttack();
  },
  giveUp: function() {
    restartGame();
  }
};


new Vue({
  el: '#app',
  data: data,
  methods: methods
})