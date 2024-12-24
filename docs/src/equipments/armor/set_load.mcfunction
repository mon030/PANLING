#套装效果cd-2件套
#scoreboard objectives add armor_set_bonus_cool_2_tick dummy ["套装效果cd-2件套"]
#套装效果cd-4件套
scoreboard objectives add armor_set_bonus_cool_4_tick dummy ["套装效果cd-4件套"]

#金二件套持续时间
scoreboard objectives add armor_set_bonus_0_2_tick dummy ["套装效果-金-二件套-持续时间"]
#金二件套增幅率
scoreboard objectives add armor_set_bonus_0_2 dummy ["套装效果-金-二件套-单层强度加成"]
scoreboard players set #system armor_set_bonus_0_2 8
#金四件套-持续时间
scoreboard objectives add armor_set_bonus_0_4_tick dummy ["套装效果-金-四件套-效果持续时间"]
#金四件套-弓箭手基础强度增加
scoreboard objectives add armor_set_bonus_0_4_1 dummy ["套装效果-金-四件套-弓箭手基础强度增加-1位小数"]
scoreboard players set #system armor_set_bonus_0_4_1 40
#金四件套-炼丹师冷却缩减
scoreboard objectives add armor_set_bonus_0_4_2 dummy ["套装效果-金-四件套-炼丹师冷却缩减"]
scoreboard players set #system armor_set_bonus_0_4_2 10

#木二件套冷却时间
scoreboard objectives add armor_set_bonus_cool_1_2_tick dummy ["套装效果-木2件套-cd"]
#木四件套-持续时间
scoreboard objectives add armor_set_bonus_1_4_tick dummy ["套装效果-木-四件套-效果持续时间"]
#木四件套-战士近战增加
scoreboard objectives add armor_set_bonus_1_4_0 dummy ["套装效果-木-四件套-战士近战攻击加成"]
scoreboard players set #system armor_set_bonus_1_4_0 20
#木四件套-弓箭手强度增加
scoreboard objectives add armor_set_bonus_1_4_1 dummy ["套装效果-木-四件套-弓箭手箭矢强度加成"]
scoreboard players set #system armor_set_bonus_1_4_1 20
#木四件套-炼丹师强度增加
scoreboard objectives add armor_set_bonus_1_4_2 dummy ["套装效果-木-四件套-炼丹师强度加成"]
scoreboard players set #system armor_set_bonus_1_4_2 30

#水二件套冷却时间
scoreboard objectives add armor_set_bonus_cool_2_2_tick dummy ["套装效果-水2件套-cd"]
#水四件套-持续时间
scoreboard objectives add armor_set_bonus_2_4_tick dummy ["套装效果-水-四件套-效果持续时间"]
#水四件套-弓箭手血量百分比限制
scoreboard objectives add armor_set_bonus_2_4_1_hp dummy ["套装效果-水-四件套-弓箭手血量百分比限制"]
scoreboard players set #system armor_set_bonus_2_4_1_hp 20

#火二件套增幅血量百分比限制
scoreboard objectives add armor_set_bonus_3_2_hp dummy ["套装效果-火-二件套-激活血量阈值"]
scoreboard players set #system armor_set_bonus_3_2_hp 80
#火二件套增幅率
scoreboard objectives add armor_set_bonus_3_2_0 dummy ["套装效果-火-二件套-战士近战攻击加成"]
scoreboard players set #system armor_set_bonus_3_2_0 15
scoreboard objectives add armor_set_bonus_3_2_1 dummy ["套装效果-火-二件套-弓箭手箭矢强度加成"]
scoreboard players set #system armor_set_bonus_3_2_1 15
scoreboard objectives add armor_set_bonus_3_2_2 dummy ["套装效果-火-二件套-炼丹师阵法强度加成"]
scoreboard players set #system armor_set_bonus_3_2_2 15

#火四件套-持续时间
scoreboard objectives add armor_set_bonus_3_4_tick dummy ["套装效果-火-四件套-效果持续时间"]
#火四件套光环增幅率
scoreboard objectives add armor_set_bonus_3_ring dummy ["套装效果-火-四件套-光环增幅率"]
scoreboard players set #system armor_set_bonus_3_ring 25
#火四件套弓箭手每层加成
scoreboard objectives add armor_set_bonus_3_1_plvl dummy ["套装效果-火-四件套-弓箭手每层加成"]
scoreboard players set #system armor_set_bonus_3_1_plvl 5
#火四件套弓箭手层上限
scoreboard objectives add armor_set_bonus_3_1_lvl dummy ["套装效果-火-四件套-弓箭手层上限"]
scoreboard players set #system armor_set_bonus_3_1_lvl 5
#火四件套弓箭手累计移动距离 100
scoreboard objectives add armor_set_bonus_3_1_walk minecraft.custom:walk_one_cm ["弓箭手累计移动距离-走"]
scoreboard objectives add armor_set_bonus_3_1_sprint custom:minecraft.sprint_one_cm ["弓箭手累计移动距离-潜行"]
scoreboard objectives add armor_set_bonus_3_1_crouch custom:minecraft.crouch_one_cm ["弓箭手累计移动距离-跑"]

#土二件套冷却时间
scoreboard objectives add armor_set_bonus_cool_4_2_tick dummy ["套装效果-土2件套-cd"]
#土四件套增幅率
scoreboard objectives add armor_set_bonus_4_4_0 dummy ["套装效果-土-四件套-战士近战攻击加成"]
scoreboard players set #system armor_set_bonus_4_4_0 35
#土四件套增幅率
scoreboard objectives add armor_set_bonus_4_4_1 dummy ["套装效果-土-四件套-弓箭手箭矢强度加成"]
scoreboard players set #system armor_set_bonus_4_4_1 25

scoreboard objectives add armor_set_bonus_4_4_2 dummy ["套装效果-土-四件套-炼丹师阵法强度加成"]
scoreboard players set #system armor_set_bonus_4_4_2 15


#金圣兽增幅率
scoreboard objectives add armor_set_bonus_0_4b dummy ["套装效果-金圣兽-强度加成"]
scoreboard players set #system armor_set_bonus_0_4b 15
scoreboard objectives add armor_set_bonus_3_4b dummy ["套装效果-火圣兽-强度加成"]
scoreboard players set #system armor_set_bonus_3_4b 15
