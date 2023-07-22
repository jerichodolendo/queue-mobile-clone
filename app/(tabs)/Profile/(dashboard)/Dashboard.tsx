import { View, Text } from 'react-native'
import ImageView from '@/app/components/ImageView/ImageView'
import DashboardStyles from './DashboardStyles'
import DateCount from '@/app/components/DateCount/DateCount'

const Dashboard = () => {
  const { containerWrapper, detailsWrapper, titleStyle, colon } =
    DashboardStyles

  return (
    <View>
      <View style={containerWrapper}>
        <Text style={titleStyle}>TOTAL INTERACTIONS</Text>
        <View style={detailsWrapper}>
          <ImageView count={0} title={'ticket'} id={'1'} />
          <ImageView count={0} title={'store'} id={'15'} />
          <ImageView count={0} title={'merchant'} id={'22'} />
        </View>
      </View>

      <View style={containerWrapper}>
        <Text style={titleStyle}>TIME SAVED</Text>
        <View style={detailsWrapper}>
          <DateCount count={0} title={'days'} />
          <Text style={colon}>:</Text>
          <DateCount count={0} title={'hours'} />
          <Text style={colon}>:</Text>
          <DateCount count={0} title={'minutes'} />
          <Text style={colon}>:</Text>
          <DateCount count={0} title={'seconds'} />
        </View>
      </View>
    </View>
  )
}

export default Dashboard
